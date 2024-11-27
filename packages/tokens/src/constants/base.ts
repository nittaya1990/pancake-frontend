import { ChainId } from '@pancakeswap/chains'
import { ERC20Token, WETH9 } from '@pancakeswap/sdk'
import { CAKE, USDC, USDT } from './common'

export const baseTokens = {
  weth: WETH9[ChainId.BASE],
  usdt: USDT[ChainId.BASE],
  usdc: USDC[ChainId.BASE],
  cake: CAKE[ChainId.BASE],
  cbETH: new ERC20Token(
    ChainId.BASE,
    '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22',
    18,
    'cbETH',
    'Coinbase Wrapped Staked ETH',
    'https://www.coinbase.com/price/coinbase-wrapped-staked-eth',
  ),
  usdbc: new ERC20Token(
    ChainId.BASE,
    '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA',
    6,
    'USDbC',
    'USD Base Coin',
    'https://help.coinbase.com/en/coinbase/getting-started/crypto-education/usd-base-coin',
  ),
  dai: new ERC20Token(
    ChainId.BASE,
    '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
    18,
    'DAI',
    'Dai Stablecoin',
    'https://www.makerdao.com/',
  ),
  tbtc: new ERC20Token(
    ChainId.BASE,
    '0x236aa50979D5f3De3Bd1Eeb40E81137F22ab794b',
    18,
    'tBTC',
    'Base tBTC v2',
    'https://threshold.network/',
  ),
  axlusdc: new ERC20Token(
    ChainId.BASE,
    '0xEB466342C4d449BC9f53A865D5Cb90586f405215',
    6,
    'axlUSDC',
    'Axelar Wrapped USDC',
    'https://axelarscan.io/assets/',
  ),
  wstETH: new ERC20Token(
    ChainId.BASE,
    '0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452',
    18,
    'wstETH',
    'Wrapped liquid staked Ether 2.0',
    'https://lido.fi/',
  ),
  usdPlus: new ERC20Token(
    ChainId.BASE,
    '0xB79DD08EA68A908A97220C76d19A6aA9cBDE4376',
    6,
    'USD+',
    'USD+',
    'https://overnight.fi/',
  ),
  brett: new ERC20Token(
    ChainId.BASE,
    '0x532f27101965dd16442E59d40670FaF5eBB142E4',
    18,
    'BRETT',
    'Brett',
    'https://www.basedbrett.com/',
  ),
  degen: new ERC20Token(
    ChainId.BASE,
    '0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed',
    18,
    'DEGEN',
    'Degen',
    'https://www.degen.tips/',
  ),
  aero: new ERC20Token(
    ChainId.BASE,
    '0x940181a94A35A4569E4529A3CDfB74e38FD98631',
    18,
    'AERO',
    'Aerodrome',
    'https://aerodrome.finance/',
  ),
  ovn: new ERC20Token(
    ChainId.BASE,
    '0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396',
    18,
    'OVN',
    'OVN',
    'https://overnight.fi/',
  ),
  zro: new ERC20Token(
    ChainId.BASE,
    '0x6985884C4392D348587B19cb9eAAf157F13271cd',
    18,
    'ZRO',
    'LayerZero',
    'https://www.layerzero.foundation/',
  ),
  weeth: new ERC20Token(
    ChainId.BASE,
    '0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A',
    18,
    'weETH',
    'Wrapped weETH',
    'https://www.ether.fi/',
  ),
  miggles: new ERC20Token(
    ChainId.BASE,
    '0xB1a03EdA10342529bBF8EB700a06C60441fEf25d',
    18,
    'MIGGLES',
    'Master Miggles',
    'https://mrmigglesbase.com/',
  ),
  usdz: new ERC20Token(
    ChainId.BASE,
    '0x04D5ddf5f3a8939889F11E97f8c4BB48317F1938',
    18,
    'USDz',
    'USDz',
    'https://www.zedxion.io/',
  ),
  wxusdt: new ERC20Token(
    ChainId.BASE,
    '0xFf0C62A4979400841eFaA6faADb07Ac7d5C98b27',
    6,
    'wxUSDT',
    'Wormhole Wrapped USDT',
    'https://wormhole.com/',
  ),
  wif: new ERC20Token(
    ChainId.BASE,
    '0x1fba65dE0a9cBD2D1DF82d141897042d36Bb6c86',
    18,
    'WIF',
    'dogwifhat',
    'https://dogwifcoin.org/',
  ),
  dola: new ERC20Token(
    ChainId.BASE,
    '0x4621b7A9c75199271F773Ebd9A499dbd165c3191',
    18,
    'DOLA',
    'Dola USD Stablecoin',
    'https://www.inverse.finance/',
  ),
  ezEth: new ERC20Token(
    ChainId.BASE,
    '0x2416092f143378750bb29b79eD961ab195CcEea5',
    18,
    'Renzo Restaked ETH',
    'ezETH',
    'https://www.renzoprotocol.com/',
  ),
  mog: new ERC20Token(
    ChainId.BASE,
    '0x2Da56AcB9Ea78330f947bD57C54119Debda7AF71',
    18,
    'Mog',
    'MOG',
    'https://mogcoin.xyz/',
  ),
  eUsd: new ERC20Token(
    ChainId.BASE,
    '0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4',
    18,
    'Electronic Dollar',
    'eUSD',
    'https://reserve.org',
  ),
  cbBTC: new ERC20Token(
    ChainId.BASE,
    '0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf',
    8,
    'Coinbase Wrapped BTC',
    'cbBTC',
    'https://www.coinbase.com/',
  ),
  lava: new ERC20Token(
    ChainId.BASE,
    '0x11e969e9B3f89cB16D686a03Cd8508C9fC0361AF',
    6,
    'Axelar Wrapped LAVA',
    'LAVA',
    'https://www.lavanet.xyz/',
  ),
  eurc: new ERC20Token(
    ChainId.BASE,
    '0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42',
    6,
    'EURC',
    'EURC',
    'https://www.circle.com/en/',
  ),
}
