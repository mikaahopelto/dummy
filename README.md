# Dummy JSON service

Dummy JSON backend service built with Bun. Return various datasets for the Homeapp.

This repo was built to experiment with Bun.js and have a fun JSON service that can be used to serve the other project Homeapp.

![Screenshot of homepage](screenshot.png)

## Getting started

To get started, download this repo and run in your terminal:

```bash
bun install
bun dummy
```

## Deploying to AWS Lambda

To deploy the service to AWS Lambda, you need to install a Bun layer to the AWS account first. Then deploy this services.

The steps are pretty much as follows:

### Deploying the custom Bun layer to AWS:

- git clone git@github.com:oven-sh/bun.git
- cd bun/packages/bun-lambda
- bun install
- aws sso login (or corresponding login method)
- bun run publish-layer (creates a zip and publishes it to the AWS account)

### Deploying the dummy API:

- bun build index.ts --outfile ./dist/handler.js
- aws sso login (if not already authenticated)
- create .env file to the deploy folder with proper env variables
- bun run deploy
