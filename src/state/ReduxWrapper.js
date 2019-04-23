import React from 'react'
import { Provider } from 'react-redux'
import { createStore as reduxCreateStore } from 'redux'
import rootReducer from './reducer'
import { GlobalStyle } from '../Components/Global'

const createStore = () => reduxCreateStore(rootReducer)
export default ({ element }) => (
  <>
    <GlobalStyle />
    <Provider store={createStore()}>{element}</Provider>
  </>
)

// return (
//   <>
//     <GlobalStyle />
//     <Provider store={store}>{element}</Provider>
//   </>
// )
