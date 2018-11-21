const Web3 = require('web3');

export class BlockhainMonitor {
  private checkInterval: any;
  private _checkIntervalValue: number;
  private web3: any;
  public lastCheckedBlock: number;

  public constructor (config: Config) {
    this._checkIntervalValue = config.checkInterval || 15000;
    const provider = new Web3.providers.WebsocketProvider(`wss://ropsten.infura.io/ws`);
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


}

