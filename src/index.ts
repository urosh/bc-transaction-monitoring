const Web3 = require('web3');

export class BlockhainMonitor {
  private checkInterval: any;
  private _checkIntervalValue: number;
  private _network: string;
  private web3: any;
  private providers = {
    'testnet': `wss://ropsten.infura.io/ws`,
    'mainnnet': `wss://mainnet.infura.io/ws`
  }
  public lastCheckedBlock: number;

  public constructor (config: Config) {
    this._checkIntervalValue = config.checkInterval || 15000;
    this._network = config.network || 'testnet';
    const provider = new Web3.providers.WebsocketProvider(this.providers[this._network]);
    this.web3 = new Web3(provider);
    this.web3.eth.net.isListening()
        .then(() => {
            console.log('Monitoring the blockchain');
        })
        .catch(e => {
            console.log('Error');
        });

    provider.on('end', (e) => {
        //this.reconnectToEtherscan(e);
    });

  }
  
  get checkIntervalValue(): number {
    return this._checkIntervalValue;
  }

  get network(): string {
    return this._network;
  }
  private init() {
    clearTimeout(this.checkInterval);
    setTimeout(this.checkUpdates, this.checkIntervalValue);
  }

  private checkUpdates() {
    // Need to get the last checked block
    // Need to decide where to store the data
    // Get current block
  }

  private addAddress() {

  }
}

interface Config {
  checkInterval?: number;
  infuraApiKey: string;
  network?: string;
}

