const randomBlockchainAddresses = require('random-blockchain-addresses');
const Web3 = require('web3');

const DEFAULT_CHECK_INTERVAL = 15000;
const PROVIDERS = ['ropsten', 'kovan', 'rinkeby', 'mainnet'];

const PROVIDER_URLS = {
  [PROVIDERS[0]]: 'https://ropsten.infura.io/v3/4364c567a49e415b98d16210a604f06c',
  [PROVIDERS[1]]: 'https://ropsten.infura.io/v3/4364c567a49e415b98d16210a604f06c',
  [PROVIDERS[2]]: 'https://rinkeby.infura.io/v3/4364c567a49e415b98d16210a604f06c',
  [PROVIDERS[3]]: 'https://mainnet.infura.io/v3/4364c567a49e415b98d16210a604f06c',
};

class BlockhainMonitor {
  constructor(config) {
    this.processConfig(config);
    this.web3 = new Web3(new Web3.providers.HttpProvider(PROVIDER_URLS[this.provider]));
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
    console.log(this.web3);
    // chose strategy
    if (!this.lastCheckedBlock) {
      this.lastCheckedBlock = await this.web3.getBlockNumber();
      console.log(this.lastCheckedBlock);
      setTimeout(this.checkTransactions, this.monitorCheckInterval);
      return;
    }
    //
  }

  onEvent() {
    console.log('Another event');
  }
}

const bcMonitor = new BlockhainMonitor({
  monitorCheckInterval: 1000
});

bcMonitor.onEvent(() => {
  console.log('We received events');
});

const runMonitor = async () => {
  const addrs = await randomBlockchainAddresses.getAddresses(30, 'ropsten');
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
