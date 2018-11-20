export class BlockhainMonitor {
  private checkInterval: any;
  private checkIntervalValue: number;
  public constructor (config?: Config) {
    this.checkIntervalValue = config.checkInterval || 15000;
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