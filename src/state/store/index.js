import { createStore, applyMiddleware } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { rootReducer } from '../reducer'

function configureStore () {
  return createStore(
    rootReducer
    // initialState
    // devToolsEnhancer(),
    // applyMiddleware(thunk)
  )
}

export { configureStore }
