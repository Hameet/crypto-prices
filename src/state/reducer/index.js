import {
  ITEMS_FETCH_DATA_SUCCESS,
  ITEMS_HAS_ERRORED,
  ITEMS_IS_LOADING
} from '../actions'
import { defaultState } from '../defaultState'
import { combineReducers } from 'redux'

function itemsHasErrored (state = false, { type, hasErrored }) {
  switch (type) {
    case ITEMS_HAS_ERRORED:
      return hasErrored

    default:
      return state
  }
}

function itemsIsLoading (state = false, action) {
  switch (action.type) {
    case ITEMS_IS_LOADING:
      return action.isLoading

    default:
      return state
  }
}

function items (state = defaultState, { type, payload }) {
  switch (type) {
    case ITEMS_FETCH_DATA_SUCCESS:
      return {
        ...state,
        prices: payload
      }
    default:
      return state
  }
}

export default combineReducers({
  itemsHasErrored,
  itemsIsLoading,
  items
})
// export { rootReducer }
