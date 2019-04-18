import { map } from 'ramda'

import { createSelector } from 'reselect'

// These functions use the reselect library's createSelector to create a memoized function to which we will later on pass the state i.e in the container. The reslecet selector function caches the results for a certain input, which in our case is the state.

const getRates = ({ rates }) => rates

const isPositive = factor => factor < 0

const getNames = createSelector(
  getRates,
  map(x => x.name)
)

const getVol = createSelector(
  getRates,
  map(x => x['24h_volume_usd'])
)

const getPriceChange1h = createSelector(
  getRates,
  map(x => x.percent_change_1h)
)

const getPriceChange24h = createSelector(
  getRates,
  map(x => x.percent_change_24h)
)

const getPriceChange7d = createSelector(
  getRates,
  map(x => x.percent_change_7d)
)

const getAvailableSupply = createSelector(
  getRates,
  map(x => x.available_supply)
)

const getMarketCap = createSelector(
  getRates,
  map(x => x.market_cap_usd)
)

const getPricesUsd = createSelector(
  getRates,
  map(x => x.price_usd)
)

const getPricesBtc = createSelector(
  getRates,
  map(x => x.price_btc)
)

const getPriceVariation = createSelector(
  getRates,
  map(x => x.percent_change_1h < 0)
)

export {
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
}
