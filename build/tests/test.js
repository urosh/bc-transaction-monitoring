"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../src/index");
var blockChainMonitor = new index_1.BlockhainMonitor({
    infuraApiKey: 'asxcs1222'
});
var blockChainMonitorWithOptions = new index_1.BlockhainMonitor({
    checkInterval: 10000,
    infuraApiKey: 'ac1223ss'
});
test('Blockchain monitor module', function () {
    expect(blockChainMonitor).toBeInstanceOf(index_1.BlockhainMonitor);
});
test('Initializing the checkIntervalValue', function () {
    expect(blockChainMonitor.checkIntervalValue).toBe(15000);
    expect(blockChainMonitorWithOptions.checkIntervalValue).toBe(10000);
});
//# sourceMappingURL=test.js.map