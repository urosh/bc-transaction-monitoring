import { BlockhainMonitor } from '../src/index';

const blockChainMonitor = new BlockhainMonitor();
test('Blockchain monitor module structure', () => {
  expect(blockChainMonitor).toBeInstanceOf(BlockhainMonitor);
})