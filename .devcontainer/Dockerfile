FROM mcr.microsoft.com/devcontainers/typescript-node:22

RUN apt-get update && \
    apt-get install gnupg2 -y && \
    rm -rf /var/lib/apt/lists/* && \
    npm i -g turbo
