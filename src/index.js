const Web3 = require("web3");

const randomBlockchainAddresses = require("random-blockchain-addresses");
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
    //this.setNetwork(config);
    //const provider = new web3.providers.WebsocketProvider(this.providers[this.networkType]);
    //this.web3 = new web3(provider);
    BlockhainMonitor.startMonitoring();
  }

  static async startMonitoring() {
    const addrs = await randomBlockchainAddresses.getAddresses(20, "testnet");
    console.log(addrs);
  }
}

new BlockhainMonitor();

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
