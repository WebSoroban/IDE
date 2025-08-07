FROM rust:1.85-slim

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    git \
    pkg-config \
    libssl-dev \
    libdbus-1-dev \
    libudev-dev \
    libusb-1.0-0-dev \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Install wasm32v1 target for Rust 1.85+
RUN rustup target add wasm32v1-none

# Install Stellar CLI using the correct method
RUN cargo install --locked --git https://github.com/stellar/stellar-cli stellar-cli

# Install Soroban CLI using the official install script
RUN curl -sSfL https://soroban.stellar.org/install.sh | sh
ENV PATH="/root/.local/bin:$PATH"

# Create working directory
WORKDIR /workspace

# Copy compilation script
COPY scripts/compile.sh /usr/local/bin/compile.sh
RUN chmod +x /usr/local/bin/compile.sh

# Set default command
CMD ["/usr/local/bin/compile.sh"] 