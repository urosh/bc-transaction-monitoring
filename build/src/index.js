"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Web3 = require('web3');
var BlockhainMonitor = /** @class */ (function () {
    function BlockhainMonitor(config) {
        this.defaultNetwork = 'testnet';
        this.providers = {
            'testnet': "wss://ropsten.infura.io/ws",
            'mainnet': "wss://mainnet.infura.io/ws"
        };
        this._checkIntervalValue = config.checkInterval || 15000;
        this.setNetwork(config);
        var provider = new Web3.providers.WebsocketProvider(this.providers[this._network]);
        this.web3 = new Web3(provider);
    }
    Object.defineProperty(BlockhainMonitor.prototype, "checkIntervalValue", {
        get: function () {
            return this._checkIntervalValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BlockhainMonitor.prototype, "network", {
        get: function () {
            return this._network;
        },
        enumerable: true,
        configurable: true
    });
    BlockhainMonitor.prototype.setNetwork = function (config) {
        this._network = (config.network && this.providers[config.network] ? config.network : false) || 'testnet';
    };
    BlockhainMonitor.prototype.startMonitoring = function () {
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