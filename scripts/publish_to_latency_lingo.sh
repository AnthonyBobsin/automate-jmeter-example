#!/bin/bash -e

# This script is used to publish the test results to Latency Lingo.

# Install Latency Lingo
curl -L https://github.com/latency-lingo/cli/releases/latest/download/latency-lingo-cli_darwin_amd64.tar.gz | tar -xz

# Invoke the CLI with our results file
./latency-lingo-cli publish \
  --file $JTL_RESULT_FILE \
  --api-key $LATENCY_LINGO_API_KEY \
  --label 'Checkout Flow Jenkins' \
  --env development

# Clean up
rm LICENSE README.md latency-lingo-cli
