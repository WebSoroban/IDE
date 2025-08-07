FROM rust:1.85-slim

# Install system dependencies including libdbus-1-dev and pkg-config
RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    pkg-config \
    libssl-dev \
    libdbus-1-dev \
    && rm -rf /var/lib/apt/lists/*

# Install wasm32v1 target for Rust 1.85+
RUN rustup target add wasm32v1-none

# Install Soroban CLI using the correct method
RUN cargo install --locked --git https://github.com/stellar/soroban-cli soroban-cli --bin soroban

# Create working directory
WORKDIR /workspace

# Copy compilation script
COPY scripts/compile.sh /usr/local/bin/compile.sh
RUN chmod +x /usr/local/bin/compile.sh

# Set default command
CMD ["/usr/local/bin/compile.sh"] 