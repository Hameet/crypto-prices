// export const defaultState = {
//   success: true,
//   terms: 'https://coinlayer.com/terms',
//   privacy: 'https://coinlayer.com/privacy',
//   timestamp: 1554030610,
//   target: 'USD',
//   rates: {
//     ABC: 59.99,
//     BTC: 4129.922529,
//     XRP: 0.311743,
//     XTO: 0.324858,
//     XTZ: 1.060868,
//     XUC: 2.34565,
//     XVG: 0.007448,
//     XZC: 7.261993,
//     YEE: 0.001811,
//     YOC: 0.00232,
//     YOYOW: 0.021938,
//     ZBC: 0,
//     ZCL: 2.800074,
//     ZEC: 57.899298,
//     ZEN: 6.88651,
//     ZIL: 0.020154,
//     ZNY: 0.02,
//     ZRX: 0.321538,
//     ZSC: 0.001881,
//     '611': 0.389165
//   }
// }

const defaultState = {
  rates: [
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      rank: '1',
      price_usd: '4157.73719971011',
      price_btc: '1'
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      rank: '2',
      price_usd: '141.309878466741',
      price_btc: '0.0339872078679224'
    }
  ]
}
