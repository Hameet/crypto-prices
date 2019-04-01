import { createStore, applyMiddleware } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import combineReducers from '../reducer'

function configureStore (initialState) {
  return createStore(
    combineReducers,
    initialState
    // devToolsEnhancer(),
    // applyMiddleware(thunk)
  )
}

export { configureStore }
