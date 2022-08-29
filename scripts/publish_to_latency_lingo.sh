#!/bin/sh

# This script is used to publish the test results to Latency Lingo.

# Install Latency Lingo
curl -L https://github.com/AnthonyBobsin/latency-lingo-cli/releases/download/v1.3.0/latency-lingo-cli_1.3.0_Darwin_x86_64.tar.gz | tar -xz

# Invoke the CLI with our results file
./latency-lingo-cli publish \
  --file result.jtl \
  --api-key $LATENCY_LINGO_API_KEY \
  --label 'Checkout Flow Jenkins' \
  --env development

# Clean up
rm LICENSE README.md latency-lingo-cli
