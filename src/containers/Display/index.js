import { connect } from 'react-redux'
import { map, pipe } from 'ramda'

import Display from '../../Components/Display'

import {
  getRates,
  getVol,
  getPriceChange1h,
  getPriceChange24h,
  getPriceChange7d,
  getNames,
  getPricesBtc,
  getPricesUsd,
  getAvailableSupply,
  getMarketCap
} from '../../state/selectors'

const mapStateToProps = state => {
  // if (state === undefined) {
  //   return {}
  // }
  const active = map(function (x) {
    return parseFloat(x) < 0 ? true : null
  })
  const fnn = x => (x < 0 ? true : null)

  const Vol = getVol(state)
  const Names = getNames(state)
  const Prices_1h = getPriceChange1h(state)
  const Prices_24h = getPriceChange24h(state)
  const Prices_7d = getPriceChange7d(state)
  const PriceUsd = getPricesUsd(state)
  const PriceBtc = getPricesBtc(state)
  const Supply = getAvailableSupply(state)
  const MarketCap = getMarketCap(state)
  // const reactive = active(Prices_1h)

  console.log('Selectors', active(Prices_1h))
  return {
    Names,
    Prices_1h,
    reactive: active(Prices_1h),
    rates: getRates(state)
  }
}

export default connect(mapStateToProps)(Display)
