import { connect } from 'react-redux'
import { map, pipe, forEach } from 'ramda'

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
  getMarketCap,
  getPriceVariation
} from '../../state/selectors'

const mapStateToProps = state => {
  // if (state === undefined) {
  //   return {}
  // }
  const active = map(function (x) {
    return parseFloat(x) < 0 ? true : null
  })

  const Vol = getVol(state)
  const Names = getNames(state)
  const Prices_1h = getPriceChange1h(state)
  const Prices_24h = getPriceChange24h(state)
  const Prices_7d = getPriceChange7d(state)
  const PriceUsd = getPricesUsd(state)
  const PriceBtc = getPricesBtc(state)
  const Supply = getAvailableSupply(state)
  const MarketCap = getMarketCap(state)
  const reactive = active(Prices_1h)
  const isPositive = factor => factor < 0
  const fnn = function (Prices_1h) {
    for (var i = 0; i < Prices_1h.length; i++) {
      console.log(Prices_1h[i] < 0)
    }
  }

  const fac = x => x < 0
  const value = map(fac, Prices_1h)

  const ite = x => console.log(x)
  forEach(ite, value)
  console.log('Selectors', getPriceVariation(state))
  return {
    Names,
    Prices_1h,
    reactive: forEach(ite, value),
    variation: getPriceVariation(state),
    rates: getRates(state)
  }
}

export default connect(mapStateToProps)(Display)
