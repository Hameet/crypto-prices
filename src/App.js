import React from 'react'
import { connect } from 'react-redux'

import Display from './containers/Display'

import { fetchPrices, itemsHasErrored, itemsIsLoading } from './state/actions'

function App ({ getData }) {
  return (
    <div>
      {' '}
      {getData()}
      <Display />
    </div>
  )
}

const API_KEY = `89bcb9d40a3fd6b18613ef79499b757e`
const key = `32d6e33b-dd31-4055-8bdb-7868f888d116`
// const apiEndpoint = `http://api.coinlayer.com/api/live?access_key=${API_KEY}`
const apiUrl = `https://api.alternative.me/v1/ticker/`
const proxyurl = 'https://cors-anywhere.herokuapp.com/'

function mapDispatchToProps (dispatch) {
  return {
    getData: () => {
      dispatch(itemsIsLoading(true))
      fetch(proxyurl + apiUrl)
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText)
          }
          dispatch(itemsIsLoading(false))
          return response
        })
        .then(function (response) {
          // console.log('jason', response.json())
          return response.json()
        })
        .then(function (items) {
          // console.log('app', items)
          return dispatch(fetchPrices(items))
        })
        .catch(() => dispatch(itemsHasErrored(true)))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App)
