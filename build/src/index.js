"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Web3 = require('web3');
var BlockhainMonitor = /** @class */ (function () {
    function BlockhainMonitor(config) {
        this._checkIntervalValue = config.checkInterval || 15000;
        var provider = new Web3.providers.WebsocketProvider("wss://ropsten.infura.io/ws");
        this.web3 = new Web3(provider);
        this.web3.eth.net.isListening()
            .then(function () {
            console.log('Monitoring the blockchain');
        })
            .catch(function (e) {
            console.log('Error');
        });
        provider.on('end', function (e) {
            //this.reconnectToEtherscan(e);
        });
    }
    Object.defineProperty(BlockhainMonitor.prototype, "checkIntervalValue", {
        get: function () {
            return this._checkIntervalValue;
        },
        enumerable: true,
        configurable: true
    });
    BlockhainMonitor.prototype.init = function () {
        clearTimeout(this.checkInterval);
        setTimeout(this.checkUpdates, this.checkIntervalValue);
    };
    BlockhainMonitor.prototype.checkUpdates = function () {
        // Need to get the last checked block
        // Need to decide where to store the data
        // Get current block
    };
    BlockhainMonitor.prototype.addAddress = function () {
    };
    return BlockhainMonitor;
}());
exports.BlockhainMonitor = BlockhainMonitor;
//# sourceMappingURL=index.js.map