const randomBlockchainAddresses = require("random-blockchain-addresses");
const Web3 = require("web3");

const DEFAULT_CHECK_INTERVAL = 15000;
const PROVIDERS = ["ropsten", "kovan", "rinkeby", "mainnet"];

const ETHERSCAN_API_KEY = 'Z1VB5VHXQEPNFIPHPCBJDQYMS6ZUJUJXCD';
const INFURA_API_KEY = '4364c567a49e415b98d16210a604f06c';

const INFURA_PROVIDER_URLS = {
  [PROVIDERS[0]]:
    `https://ropsten.infura.io/v3/${INFURA_API_KEY}`,
  [PROVIDERS[1]]:
    `https://ropsten.infura.io/v3/${INFURA_API_KEY}`,
  [PROVIDERS[2]]:
    `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
  [PROVIDERS[3]]:
    `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
};

const ETHERSCAN_PROVIDER_URLS = {
  [PROVIDERS[0]]:
    `https://ropsten.etherscan.io/${ETHERSCAN_API_KEY}`,
  [PROVIDERS[1]]:
    `https://kovan.etherscan.io/${ETHERSCAN_API_KEY}`,
  [PROVIDERS[2]]:
    `https://rinkeby.etherscan.io/${ETHERSCAN_API_KEY}`,
  [PROVIDERS[3]]:
    `https://etherscan.io${ETHERSCAN_API_KEY}`
};


class BlockhainMonitor {
  constructor(config) {
    this.processConfig(config);
    this.web3 = new Web3(
      new Web3.providers.HttpProvider(INFURA_PROVIDER_URLS[this.provider])
    );
  }

  processConfig(config) {
    // time check interval
    this.monitorCheckInterval =
      config && config.monitorCheckInterval
        ? config.monitorCheckInterval
        : DEFAULT_CHECK_INTERVAL;

    if (Number.isNaN(this.monitorCheckInterval)) {
      this.monitorCheckInterval = DEFAULT_CHECK_INTERVAL;
    }

    this.provider = config && config.provider ? config.provider : PROVIDERS[0];

    if (PROVIDERS.indexOf(this.provider) === -1) {
      [this.provider] = PROVIDERS;
    }
  }

  async importAddresses(addresses) {
    this.addresses = [...addresses];
  }

  // How do we initialize the module

  monitor(addresses) {
    this.addresses = [...addresses];
    setTimeout(this.checkTransactions.bind(this), this.monitorCheckInterval);
  }

  async checkTransactions() {
    const currentBlock = await this.web3.getBlock();
    // chose strategy
    if (!this.lastCheckedBlock) {
      this.lastCheckedBlock = currentBlock;
      setTimeout(this.checkTransactions, this.monitorCheckInterval);
      return;
    }

    // choose strategy
    if (currentBlock - this.lastCheckedBlock < this.addresses.length) {
      // we can go with the block based strategy
    } else {
      // we go with address by address strategy from etherscan
    }
    //
  }

  async blockBasedCheck() {

  }

  async walletBasedCheck() {

  }



  onEvent() {
    console.log("Another event");
  }
}

const bcMonitor = new BlockhainMonitor({
  monitorCheckInterval: 1000
});

bcMonitor.onEvent(() => {
  console.log("We received events");
});

const runMonitor = async () => {
  const addrs = await randomBlockchainAddresses.getAddresses(30, "ropsten");
  bcMonitor.monitor(addrs);
};
// What i need here

// Need to iniitalize module

// Need to add address one by one or in batch

// For address array I need to call async thing to get all the transactions before we start
// the monitoring part

// We need to add the address

// We need to track blockchain updates

// interface Config {
//   checkInterval?: number;
//   infuraApiKey: string;
//   network?: string;
// }

runMonitor();
