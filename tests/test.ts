import rewire = require('rewire');
import { BlockhainMonitor } from '../src/index';

const blockChainMonitor = new BlockhainMonitor();
const blockChainMonitorWithOptions = new BlockhainMonitor({
  checkInterval: 10000
});

test('Blockchain monitor module', () => {
  expect(blockChainMonitor).toBeInstanceOf(BlockhainMonitor);
})

test('Initializing the checkIntervalValue', () => {
  expect(blockChainMonitor.checkIntervalValue).toBe(15000);
  expect(blockChainMonitorWithOptions.checkIntervalValue).toBe(10000);
});
