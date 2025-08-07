FROM rust:1.85-slim

# Install system dependencies including libdbus-1-dev, libudev-dev, and pkg-config
RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    git \
    pkg-config \
    libssl-dev \
    libdbus-1-dev \
    libudev-dev \
    libusb-1.0-0-dev \
    && rm -rf /var/lib/apt/lists/*

# Install wasm32v1 target for Rust 1.85+
RUN rustup target add wasm32v1-none

# Set environment variables to optimize Rust compilation
ENV CARGO_NET_GIT_FETCH_WITH_CLI=true
ENV CARGO_HTTP_TIMEOUT=300
ENV RUSTFLAGS="-C target-cpu=native"

# Install Soroban CLI using the correct method with timeout and optimization
RUN timeout 600 cargo install --locked --git https://github.com/stellar/soroban-cli soroban-cli --bin soroban --jobs 1

# Create working directory
WORKDIR /workspace

# Copy compilation script
COPY scripts/compile.sh /usr/local/bin/compile.sh
RUN chmod +x /usr/local/bin/compile.sh

# Set default command
CMD ["/usr/local/bin/compile.sh"] 