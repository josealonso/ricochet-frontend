import { Coin } from './coins';
import {
  USDCxAddress,
  usdcxWethxExchangeAddress,
  WETHxAddress,
  usdcxRicExchangeAddress,
  RICAddress,
  WBTCxAddress,
  usdcxWbtcxExchangeAddress,
  wethxUsdcxExchangeAddress,
  wbtcxUsdcxExchangeAddress,
  daixMkrxExchangeAddress,
  DAIxAddress,
  MKRxAddress,
  mkrxDaixExchangeAddress,
  usdcxMkrxExchangeAddress,
  mkrxUsdcxExchangeAddress,
  daixEthxExchangeAddress,
  ethxDaixExchangeAddress,
  daixMaticxExchangeAddress,
  MATICxAddress,
  maticxDaixExchangeAddress,
  usdcxMaticxExchangeAddress,
  maticxUsdcxExchangeAddress,
} from './polygon_config';

enum FlowEnum {
  usdcWethFlowQuery = 'usdcWethFlowQuery',
  daiMkrFlowQuery = 'daiMkrFlowQuery',
  mkrDaiFlowQuery = 'mkrDaiFlowQuery',
  usdcMkrFlowQuery = 'usdcMkrFlowQuery',
  mkrUsdcFlowQuery = 'mkrUsdcFlowQuery',
  daiMaticFlowQuery = 'daiMaticFlowQuery',
  maticDaiFlowQuery = 'maticDaiFlowQuery',
  usdcMaticFlowQuery = 'usdcMaticFlowQuery',
  maticUsdcFlowQuery = 'usdcMaticFlowQuery',
  daiEthFlowQuery = 'daiEthFlowQuery',
  ethDaiFlowQuery = 'ethDaiFlowQuery',
  usdcWbtcFlowQuery = 'usdcWbtcFlowQuery',
  wethUsdcFlowQuery = 'wethUsdcFlowQuery',
  wbtcUsdcFlowQuery = 'wbtcUsdcFlowQuery',
  usdcRicFlowQuery = 'usdcRicFlowQuery',
}

export type FlowType = 'launchpad' | 'market';

export const flowConfig: {
  superToken: string,
  tokenA: string,
  tokenB: string,
  coinA: Coin,
  coinB: Coin,
  flowKey: FlowEnum,
  type: FlowType,
}[] = [
  {
    superToken: usdcxRicExchangeAddress,
    tokenA: USDCxAddress,
    tokenB: RICAddress,
    coinA: Coin.USDC,
    coinB: Coin.RIC,
    flowKey: FlowEnum.usdcRicFlowQuery,
    type: 'launchpad',
  },
  {
    superToken: usdcxWethxExchangeAddress,
    tokenA: USDCxAddress,
    tokenB: WETHxAddress,
    coinA: Coin.USDC,
    coinB: Coin.WETH,
    flowKey: FlowEnum.usdcWethFlowQuery,
    type: 'market',
  },
  {
    superToken: usdcxWbtcxExchangeAddress,
    tokenA: USDCxAddress,
    tokenB: WBTCxAddress,
    coinA: Coin.USDC,
    coinB: Coin.WBTC,
    flowKey: FlowEnum.usdcWbtcFlowQuery,
    type: 'market',
  },
  {
    superToken: wethxUsdcxExchangeAddress,
    tokenA: WETHxAddress,
    tokenB: USDCxAddress,
    coinA: Coin.WETH,
    coinB: Coin.USDC,
    flowKey: FlowEnum.wethUsdcFlowQuery,
    type: 'market',
  },
  {
    superToken: wbtcxUsdcxExchangeAddress,
    tokenA: WBTCxAddress,
    tokenB: USDCxAddress,
    coinA: Coin.WBTC,
    coinB: Coin.USDC,
    flowKey: FlowEnum.wbtcUsdcFlowQuery,
    type: 'market',
  },
  {
    superToken: daixMkrxExchangeAddress,
    tokenA: DAIxAddress,
    tokenB: MKRxAddress,
    coinA: Coin.DAI,
    coinB: Coin.MKR,
    flowKey: FlowEnum.daiMkrFlowQuery,
    type: 'market',
  },
  {
    superToken: mkrxDaixExchangeAddress,
    tokenA: MKRxAddress,
    tokenB: DAIxAddress,
    coinA: Coin.MKR,
    coinB: Coin.DAI,
    flowKey: FlowEnum.mkrDaiFlowQuery,
    type: 'market',
  },
  {
    superToken: usdcxMkrxExchangeAddress,
    tokenA: USDCxAddress,
    tokenB: MKRxAddress,
    coinA: Coin.USDC,
    coinB: Coin.MKR,
    flowKey: FlowEnum.usdcMkrFlowQuery,
    type: 'market',
  },
  {
    superToken: mkrxUsdcxExchangeAddress,
    tokenA: MKRxAddress,
    tokenB: USDCxAddress,
    coinA: Coin.MKR,
    coinB: Coin.USDC,
    flowKey: FlowEnum.mkrUsdcFlowQuery,
    type: 'market',
  },
  {
    superToken: daixEthxExchangeAddress,
    tokenA: DAIxAddress,
    tokenB: WETHxAddress,
    coinA: Coin.DAI,
    coinB: Coin.ETH,
    flowKey: FlowEnum.daiEthFlowQuery,
    type: 'market',
  },
  {
    superToken: ethxDaixExchangeAddress,
    tokenA: WETHxAddress,
    tokenB: DAIxAddress,
    coinA: Coin.ETH,
    coinB: Coin.DAI,
    flowKey: FlowEnum.ethDaiFlowQuery,
    type: 'market',
  },
  {
    superToken: daixMaticxExchangeAddress,
    tokenA: DAIxAddress,
    tokenB: MATICxAddress,
    coinA: Coin.DAI,
    coinB: Coin.MATIC,
    flowKey: FlowEnum.daiMaticFlowQuery,
    type: 'market',
  },
  {
    superToken: maticxDaixExchangeAddress,
    tokenA: MATICxAddress,
    tokenB: DAIxAddress,
    coinA: Coin.MATIC,
    coinB: Coin.DAI,
    flowKey: FlowEnum.maticDaiFlowQuery,
    type: 'market',
  },
  {
    superToken: usdcxMaticxExchangeAddress,
    tokenA: USDCxAddress,
    tokenB: MATICxAddress,
    coinA: Coin.USDC,
    coinB: Coin.MATIC,
    flowKey: FlowEnum.usdcMaticFlowQuery,
    type: 'market',
  },
  {
    superToken: maticxUsdcxExchangeAddress,
    tokenA: MATICxAddress,
    tokenB: USDCxAddress,
    coinA: Coin.MATIC,
    coinB: Coin.USDC,
    flowKey: FlowEnum.maticUsdcFlowQuery,
    type: 'market',
  },
];