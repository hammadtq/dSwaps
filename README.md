# dSwaps

dSwaps is a static dapp suitable for hosting on IPFS. The dapp does not use any kind of server and communicates directly with the Ethereum blockchain. The dapp uses Kyber Networks swaps and permissionless reserve functionality to allow anyone to become a market maker and swap their ETH and ERC20 based tokens in a decentralized-permissionless way!

## Features
* Simple Swaps
* Permissionless token reserves/orderbooks

## Getting Started
To start using the dapp, download or clone it on your computer. Run an IPFS daemon, then add dSwaps folder to the IPFS using
```ipfs add -r dSwaps``` command. Note the main folder hash that the terminal will provide, open it in your bowser using ```localhost:8080/<your-hash>``` or by opening ```ipfs.io/ipfs/<your-hash>``` to start using the dapp.

You can also the pin your dapp instance by using one of the IPFS pinning service providers such as cloudflare-ipfs.com

## Supporting Networks

* Main Ethereum Network
* Ropsten Test Network

## Demo
You can see a [demo hosted over IPFS here](https://cloudflare-ipfs.com/ipfs/QmahpRL1pALo5XUhK2F4H4bovAJQBqHZJnUJGvuicsGHRh/index.html).

## Supported Wallets
* MetaMask Browser Extension

## IPFS Documentation
To get started with IPFS, see the [documentation](https://docs.ipfs.io/introduction/usage/).

## Kyber Documentation
To understand the functions in ```functions/contract-functions.js```, please see [Kyber Documentation](https://developer.kyber.network/docs/Start/).

## Running a cache server
The app uses a centralized cache to speed-up the process. To host your own cache server, please install [dSwaps-reserves-cache](https://github.com/hammadtq/dSwaps-reserves-cache) on a node.js enabled server.

## Credits
The project is based over [Crypto9](https://github.com/eddietio/crypto9), a project that was developed at the first ETHSingapre Hackathon in December, 2018.
