import { map, keys, values } from 'ramda'

import { createSelector } from 'reselect'

// This function uses ramda's map to extract the crypto names and prices and then combines them into one single object
const getNamesAndPrices = map(function (x) {
  var name = x.name
  var price = x.price_usd
  var obj = { [name]: price }
  return obj
})

// These two functions use the reselect library's createSelector to create a memoized function to which we will later on pass the state i.e in the container. The reslecet selector function caches the results for a certain input, which in our case is the state.

const FilteredKeys = createSelector(
  getNamesAndPrices,
  map(keys)
)

const FilteredValues = createSelector(
  getNamesAndPrices,
  map(values)
)

export { getNamesAndPrices, FilteredKeys, FilteredValues }
