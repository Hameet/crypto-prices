export const ITEMS_HAS_ERRORED = 'ITEMS_HAS_ERRORED'
export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING'
export const ITEMS_FETCH_DATA_SUCCESS = 'ITEMS_FETCH_DATA_SUCCESS'

export function fetchPrices (rates) {
  return {
    type: ITEMS_FETCH_DATA_SUCCESS,
    payload: rates
  }
}

export function itemsHasErrored (bool) {
  return {
    type: ITEMS_HAS_ERRORED,
    hasErrored: bool
  }
}

export function itemsIsLoading (bool) {
  return {
    type: ITEMS_IS_LOADING,
    isLoading: bool
  }
}
