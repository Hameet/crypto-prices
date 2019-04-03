import { ITEMS_FETCH_DATA_SUCCESS } from '../actions'
import { defaultState } from '../defaultState'

function rootReducer (state = defaultState, { type, payload }) {
  switch (type) {
    case ITEMS_FETCH_DATA_SUCCESS:
      return {
        ...state,
        rates: payload
      }
    default:
      return state
  }
}

export { rootReducer }
