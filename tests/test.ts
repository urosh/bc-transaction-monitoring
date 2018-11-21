import rewire = require('rewire');
import { BlockhainMonitor } from '../src/index';

const blockChainMonitor = new BlockhainMonitor({
  infuraApiKey: 'asxcs1222'
});

const blockChainMonitorWithOptions = new BlockhainMonitor({
  checkInterval: 10000,
  infuraApiKey: 'ac1223ss',
  network: 'mainnet'
});

test('Blockchain monitor module', () => {
  expect(blockChainMonitor).toBeInstanceOf(BlockhainMonitor);
})

test('Initializing the checkIntervalValue', () => {
  expect(blockChainMonitor.checkIntervalValue).toBe(15000);
  expect(blockChainMonitorWithOptions.checkIntervalValue).toBe(10000);
});

test('Initializing the network', () => {
  expect(blockChainMonitor.network).toBe('testnet');
  expect(blockChainMonitorWithOptions.network).toBe('mainnet');

})
