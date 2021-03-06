var config = {};

config.home_url = 'https://etheropt.github.io';
// config.home_url = 'http://localhost:8080';
config.contract_market = 'etheropt.sol';
config.contract_contracts = 'etheropt_contracts.sol';
config.contract_addrs = [];
config.contract_contracts_addr = '0xed0171e5d133cef766edfe5461becac0156d4611';
config.domain = undefined;
config.port = 8082;
config.url = undefined;
config.eth_testnet = false;
config.eth_provider = 'http://localhost:8545';
config.eth_gas_price = 20000000000;
config.eth_addr = '0x0000000000000000000000000000000000000000';
config.eth_addr_pk = '';

try {
  global.config = config;
  module.exports = config;
} catch (err) {}
