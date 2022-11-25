## Crowdfunding Smartcontract using Solidity

### Prerequisites

1. Alchemy account
2. Metamask wallet
3. Goerli Test Network
4. NPM Package Manager
5. Hardhat
6. Ether.js

### Get Started

Crowdfunding functionalities:
1. Anyone can create a new campaign
2. Multiple campaigns can be created by single owner
3. Each contributor can fund multiple campaigns
4. Each campaign status is open or closed
5. Campaign owner can withdraw funds only when required funding goal has been achieved

### Environment Variable

Please rename `.env-sample` to `.env`

```
API_URL = "https://eth-goerli.alchemyapi.io/v2/API"
PRIVATE_KEY = "PRIVATE-KEY"
API_KEY = "API-KEY"
CONTRACT_ADDRESS = "CONTRACT-ADDRESS"
```

### How to Deploy to Goerli

1. Add ether from [faucet](https://goerlifaucet.com/)
2. Compile crowdfunding smart contract
```
npx hardhat compile
```
3. Deploy smart contract
```
npx hardhat run scripts/deploy.js --network goerli
```

### How to Interact with Smart Contract

1. Script to interact with smart contract (create new campaign)
```
npx hardhat run scripts/create_campaign.js --network goerli
```