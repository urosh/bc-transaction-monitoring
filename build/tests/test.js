"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../src/index");
var blockChainMonitor = new index_1.BlockhainMonitor({
    infuraApiKey: 'asxcs1222'
});
var blockChainMonitorWithOptions = new index_1.BlockhainMonitor({
    checkInterval: 10000,
    infuraApiKey: 'ac1223ss',
    network: 'mainnet'
});
test('Blockchain monitor module', function () {
    expect(blockChainMonitor).toBeInstanceOf(index_1.BlockhainMonitor);
});
test('Initializing the checkIntervalValue', function () {
    expect(blockChainMonitor.checkIntervalValue).toBe(15000);
    expect(blockChainMonitorWithOptions.checkIntervalValue).toBe(10000);
});
describe('Setting network parameter', function () {
    var bM1 = new index_1.BlockhainMonitor({
        network: 'mainnet',
        infuraApiKey: '12212'
    });
    var bM2 = new index_1.BlockhainMonitor({
        network: 'testnet',
        infuraApiKey: '12212'
    });
    var bM3 = new index_1.BlockhainMonitor({
        network: 'aaaaa',
        infuraApiKey: '12212'
    });
    var bM4 = new index_1.BlockhainMonitor({
        infuraApiKey: '12212'
    });
    test('Set mainnet', function () {
        expect(bM1.network).toBe('mainnet');
    });
    test('Set testnet', function () {
        expect(bM2.network).toBe('testnet');
    });
    test('Set incorrect', function () {
        expect(bM3.network).toBe('testnet');
    });
    test('Skip network', function () {
        expect(bM4.network).toBe('testnet');
    });
});
//# sourceMappingURL=test.js.map