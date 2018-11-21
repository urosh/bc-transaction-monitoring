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

describe('Setting network parameter', () => {
  const bM1 = new BlockhainMonitor({
    network: 'mainnet',
    infuraApiKey: '12212'
  })
  const bM2 = new BlockhainMonitor({
    network: 'testnet',
    infuraApiKey: '12212'
  })
  const bM3 = new BlockhainMonitor({
    network: 'aaaaa',
    infuraApiKey: '12212'
  })
  const bM4 = new BlockhainMonitor({
    infuraApiKey: '12212'
  })
  test('Set mainnet', () => {
    expect(bM1.network).toBe('mainnet');
  })

  test('Set testnet', () => {
    expect(bM2.network).toBe('testnet');
  })

  test('Set incorrect', () => {
    expect(bM3.network).toBe('testnet');
  })

  test('Skip network', () => {
    expect(bM4.network).toBe('testnet');
  })
})
