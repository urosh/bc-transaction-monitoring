export class BlockhainMonitor {
  private checkInterval: any;
  private _checkIntervalValue: number;
  public constructor (config?: Config) {
    this._checkIntervalValue = config && config.checkInterval ? config.checkInterval : 15000;
  }
  
  get checkIntervalValue(): number {
    return this._checkIntervalValue;
  }
  private init() {
    clearTimeout(this.checkInterval);
    setTimeout(this.checkUpdates, this.checkIntervalValue);
  }

  private checkUpdates() {
    
  }

  private addAddress() {

  }
}

interface Config {
  checkInterval?: number;


}