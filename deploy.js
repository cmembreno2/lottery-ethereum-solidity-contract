// Load environment variables.
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { abi, evm } = require('./compile');

provider = new HDWalletProvider('type toward enforce onion runway wolf cream ladder rate enemy other magnet',
'https://rinkeby.infura.io/v3/1e4382d2613d4763b9d126aa0a832d4f');

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from account", accounts[2]);

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object })
    .send({ gas:'1000000',from: accounts[2] });
  
  console.log(abi)
  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};

deploy();