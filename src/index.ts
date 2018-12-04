const web3 = require("web3");

export class BlockhainMonitor {
  private checkInterval: any;
  private intervalValue: number;
  private networkType: string;
  private web3: any;
  private defaultNetwork: string = "testnet";
  private providers = {
    testnet: `wss://ropsten.infura.io/ws`,
    mainnet: `wss://mainnet.infura.io/ws`
  };
  public lastCheckedBlock: number;

  public constructor(config: Config) {
    this.intervalValue = config.checkInterval || 15000;
    this.setNetwork(config);
    const provider = new web3.providers.WebsocketProvider(
      this.providers[this.network]
    );
    this.web3 = new web3(provider);
  }

  get checkIntervalValue(): number {
    return this.intervalValue;
  }

  get network(): string {
    return this.networkType;
  }

  private setNetwork(config: Config) {
    this.networkType =
      (config.network && this.providers[config.network]
        ? config.network
        : false) || 'testnet';
  }
  private startMonitoring() {
    clearTimeout(this.checkInterval);
    setTimeout(this.checkUpdates, this.checkIntervalValue);
  }

  private checkUpdates() {
    // Need to get the last checked block
    // Need to decide where to store the data
    // Get current block
  }

  private addAddress() {}
}

interface Config {
  checkInterval?: number;
  infuraApiKey: string;
  network?: string;
}
