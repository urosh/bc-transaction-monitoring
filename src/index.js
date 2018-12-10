const Web3 = require("web3");
const ethers = require("ethers");
const randomBlockchainAddresses = require("random-blockchain-addresses");
const etherscanProvider = new ethers.providers.EtherscanProvider('ropsten');
// export class BlockhainMonitor {
//   private checkInterval: any;
//   private intervalValue: number;
//   private networkType: string;
//   private web3: any;
//   private defaultNetwork: string = 'testnet';
//   private providers = {
//     testnet: 'wss://ropsten.infura.io/ws',
//     mainnet: 'wss://mainnet.infura.io/ws',
//   };
//   public lastCheckedBlock: number;

//   public constructor(config?: Config) {
//     this.intervalValue = (config && config.checkInterval) || 15000;
//     this.setNetwork(config);
//     const provider = new web3.providers.WebsocketProvider(this.providers[this.networkType]);
//     this.web3 = new web3(provider);
//     this.startMonitoring();
//   }

//   get checkIntervalValue(): number {
//     return this.intervalValue;
//   }

//   get network(): string {
//     return this.networkType;
//   }

//   private setNetwork(config: Config) {
//     this.networkType =
//       (config.network && this.providers[config.network]
//         ? config.network
//         : false) || 'testnet';
//   }
//   private  async startMonitoring(): Promise<any> {
//     clearTimeout(this.checkInterval);
//     setTimeout(this.checkUpdates, this.checkIntervalValue);

//     console.debug('We want to generate addresses');
//     const addrs = await randomBlockchainAddresses.getAddresses(20, this.networkType);
//     console.debug(addrs);
//   }

//   private checkUpdates() {
//     // Need to get the last checked block
//     // Need to decide where to store the data
//     // Get current block
//   }

//   private addAddress() {}
// }

class BlockhainMonitor {
  constructor(config) {
    this.intervalValue = (config && config.checkInterval) || 15000;
    // this.setNetwork(config);
    // const provider = new web3.providers.WebsocketProvider(this.providers[this.networkType]);
    // this.web3 = new web3(provider);
    BlockhainMonitor.startMonitoring();
  }

  setProvider(config) {
    this.provider = config && config.provider ? config.provider : ''
  }

  async importAddresses(addresses) {
    this.addresses = [...addresses];

    console.log("We got the array of addresses to start", addresses);
    
    addresses.map(async (addr) => {
      const h = await etherscanProvider.getHistory(addr, 0, 'latest');
      console.log(h);
    });

    console.log('Completing the request');
    // For each address we need to call etherscan and get its transactions

  }

  // How do we initialize the module

  static async startMonitoring() {
    //console.log(addrs);
  }

  onEvent() {
    console.log("Another event");
  }
}

const bcMonitor = new BlockhainMonitor();

bcMonitor.onEvent(() => {
  console.log("We received events");
});

const runMonitor = async () => {
  const addrs = await randomBlockchainAddresses.getAddresses(10, "ropsten");
  //console.log(addrs);
  bcMonitor.importAddresses(addrs);
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
