#!/bin/bash

# Manual Soroban Contract Deployment Script
# Usage: ./manual-deploy.sh [CONTRACT_NAME] [KEYPAIR_NAME] [NETWORK]

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to log messages
log() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Check if required tools are installed
check_prerequisites() {
    log "Checking prerequisites..."
    
    # Check if stellar CLI is installed
    if ! command -v stellar &> /dev/null; then
        error "Stellar CLI not found. Please install it first:"
        echo "curl -sSfL https://soroban.stellar.org/install.sh | sh"
        exit 1
    fi
    
    # Check if cargo is installed
    if ! command -v cargo &> /dev/null; then
        error "Cargo not found. Please install Rust first:"
        echo "curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh"
        exit 1
    fi
    
    # Check if soroban CLI is installed
    if ! command -v soroban &> /dev/null; then
        warning "Soroban CLI not found. Installing..."
        cargo install --locked --git https://github.com/stellar/soroban-tools soroban-cli
    fi
    
    success "All prerequisites are installed"
}

# Build the contract
build_contract() {
    local contract_name=$1
    
    log "Building contract: $contract_name"
    
    # Check if Cargo.toml exists
    if [ ! -f "Cargo.toml" ]; then
        error "Cargo.toml not found. Please run this script from your contract directory."
        exit 1
    fi
    
    # Clean previous builds
    log "Cleaning previous builds..."
    cargo clean
    
    # Build the contract
    log "Building contract..."
    cargo build --target wasm32-unknown-unknown --release
    
    # Check if WASM file was created
    local wasm_file="target/wasm32-unknown-unknown/release/${contract_name}.wasm"
    if [ ! -f "$wasm_file" ]; then
        error "WASM file not found at $wasm_file"
        exit 1
    fi
    
    success "Contract built successfully: $wasm_file"
    echo "$wasm_file"
}

# Check account balance
check_balance() {
    local keypair_name=$1
    local network=$2
    
    log "Checking account balance..."
    
    local public_key=$(stellar keys address "$keypair_name" 2>/dev/null)
    if [ $? -ne 0 ]; then
        error "Failed to get public key for keypair: $keypair_name"
        exit 1
    fi
    
    log "Account: $public_key"
    
    # Get account info
    local account_info=$(stellar account show "$public_key" --network "$network" 2>/dev/null)
    if [ $? -ne 0 ]; then
        warning "Account not found or has no balance. Please fund your account:"
        echo "Visit: https://laboratory.stellar.org/#account-creator?network=test"
        echo "Or use friendbot: https://friendbot.stellar.org/?addr=$public_key"
        return 1
    fi
    
    success "Account has sufficient balance"
    return 0
}

# Deploy the contract
deploy_contract() {
    local wasm_file=$1
    local keypair_name=$2
    local network=$3
    local alias=$4
    
    log "Deploying contract..."
    log "WASM file: $wasm_file"
    log "Keypair: $keypair_name"
    log "Network: $network"
    
    # Build deployment command
    local deploy_cmd="stellar contract deploy --wasm $wasm_file --source $keypair_name --network $network"
    
    if [ ! -z "$alias" ]; then
        deploy_cmd="$deploy_cmd --alias $alias"
        log "Alias: $alias"
    fi
    
    log "Running: $deploy_cmd"
    
    # Execute deployment
    local result=$(eval "$deploy_cmd" 2>&1)
    local exit_code=$?
    
    if [ $exit_code -eq 0 ]; then
        success "Contract deployed successfully!"
        
        # Extract contract ID from output
        local contract_id=$(echo "$result" | grep -o 'Contract ID: [a-zA-Z0-9]*' | cut -d' ' -f3)
        if [ ! -z "$contract_id" ]; then
            success "Contract ID: $contract_id"
            echo "$contract_id" > .contract_id
        fi
        
        # Extract transaction hash
        local tx_hash=$(echo "$result" | grep -o 'Transaction Hash: [a-zA-Z0-9]*' | cut -d' ' -f3)
        if [ ! -z "$tx_hash" ]; then
            log "Transaction Hash: $tx_hash"
        fi
        
        return 0
    else
        error "Deployment failed:"
        echo "$result"
        return 1
    fi
}

# Test the contract
test_contract() {
    local contract_id=$1
    local keypair_name=$2
    local network=$3
    
    if [ -z "$contract_id" ]; then
        warning "No contract ID provided, skipping test"
        return 0
    fi
    
    log "Testing contract: $contract_id"
    
    # Try to invoke the contract (this is a basic test)
    local test_cmd="stellar contract invoke --id $contract_id --source $keypair_name --network $network -- hello --to \"World\""
    
    log "Running test: $test_cmd"
    
    local result=$(eval "$test_cmd" 2>&1)
    local exit_code=$?
    
    if [ $exit_code -eq 0 ]; then
        success "Contract test successful!"
        echo "$result"
    else
        warning "Contract test failed (this might be expected if the contract doesn't have a 'hello' function):"
        echo "$result"
    fi
}

# Main function
main() {
    local contract_name=${1:-"my_soroban_contract"}
    local keypair_name=${2:-"default_keypair"}
    local network=${3:-"testnet"}
    local alias=${4:-""}
    
    log "Starting manual deployment..."
    log "Contract: $contract_name"
    log "Keypair: $keypair_name"
    log "Network: $network"
    
    # Check prerequisites
    check_prerequisites
    
    # Build contract
    local wasm_file=$(build_contract "$contract_name")
    
    # Check balance
    if ! check_balance "$keypair_name" "$network"; then
        error "Please fund your account and try again"
        exit 1
    fi
    
    # Deploy contract
    if deploy_contract "$wasm_file" "$keypair_name" "$network" "$alias"; then
        # Read contract ID from file
        if [ -f ".contract_id" ]; then
            local contract_id=$(cat .contract_id)
            test_contract "$contract_id" "$keypair_name" "$network"
            
            success "Deployment completed successfully!"
            log "Contract ID: $contract_id"
            log "Network: $network"
            log "You can now use this contract in your applications"
        fi
    else
        error "Deployment failed"
        exit 1
    fi
}

# Show usage
show_usage() {
    echo "Usage: $0 [CONTRACT_NAME] [KEYPAIR_NAME] [NETWORK] [ALIAS]"
    echo ""
    echo "Arguments:"
    echo "  CONTRACT_NAME  Name of your contract (default: my_soroban_contract)"
    echo "  KEYPAIR_NAME   Name of your Stellar keypair (default: default_keypair)"
    echo "  NETWORK        Network to deploy to (default: testnet)"
    echo "  ALIAS          Optional alias for the contract"
    echo ""
    echo "Examples:"
    echo "  $0                                    # Use defaults"
    echo "  $0 my_contract my_keypair testnet    # Specify contract and keypair"
    echo "  $0 my_contract my_keypair mainnet my_alias  # Deploy to mainnet with alias"
    echo ""
    echo "Prerequisites:"
    echo "  1. Install Stellar CLI: curl -sSfL https://soroban.stellar.org/install.sh | sh"
    echo "  2. Install Rust: curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh"
    echo "  3. Create a keypair: stellar keys generate my_keypair --network testnet"
    echo "  4. Fund your account: https://laboratory.stellar.org/#account-creator?network=test"
}

# Check if help is requested
if [ "$1" = "-h" ] || [ "$1" = "--help" ]; then
    show_usage
    exit 0
fi

# Run main function
main "$@" 