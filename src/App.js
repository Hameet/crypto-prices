import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Display from './containers/Display'
import Form from './Components/Form'

// import { fetchPrices } from './state/actions'

import { fetchPrices, itemsHasErrored, itemsIsLoading } from './state/actions'

function App ({ getData }) {
  console.log('getData', getData())
  return (
    <div>
      {' '}
      {getData()}
      <Display />
    </div>
  )
}

const API_KEY = `89bcb9d40a3fd6b18613ef79499b757e`
const apiEndpoint = `http://api.coinlayer.com/api/live?access_key=${API_KEY}`

// const getData = async e => {
//   e.preventDefault()
//   const api_call = await fetch(apiEndpoint)
//   const data = await api_call.json()
//   console.log('data', data)
// }

// function mapDispatchToProps (dispatch) {
//   fetchData: event => dispatch(todoAdded(event.currentTarget.value))
// }

function mapDispatchToProps (dispatch) {
  // console.log(items)
  return {
    getData: () => {
      dispatch(itemsIsLoading(true))
      fetch(apiEndpoint)
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText)
          }

          dispatch(itemsIsLoading(false))

          return response
        })
        .then(response => response.json())
        .then(function (items) {
          // console.log('app', items, 'items.rates', items.rates)
          return dispatch(fetchPrices(items.rates))
        })
        .catch(() => dispatch(itemsHasErrored(true)))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App)
