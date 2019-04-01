import { useState, useEffect } from 'react'
import { fetchPrices } from './state/actions'
import { connect } from 'react-redux'
const API_KEY = `89bcb9d40a3fd6b18613ef79499b757e`
const apiEndpoint = `http://api.coinlayer.com/api/live?access_key=${API_KEY}`

function useFetch (url, defaultResponse) {
  const [data, setData] = useState(defaultResponse)
  async function getDataFromAPI (url) {
    try {
      const res = await fetch(url)
      const data = await res.json()
      setData({
        isLoading: false,
        data
      })
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(
    () => {
      getDataFromAPI(url)
    },
    [url]
  )
  return data
}

function Hook () {
  const userFetchResponse = useFetch(apiEndpoint, {
    isLoading: true,
    data: null
  })
  if (!userFetchResponse.data || userFetchResponse.isLoading) {
    return 'Loading...'
  }
  const { ABC, BTC } = userFetchResponse.data.rates
  //   console.log('log', userFetchResponse.data.rates)
}

// function mapDispatchToProps (dispatch) {
//   console.log('log', state)
//   return {
//     Hook: () => dispatch(fetchPrices())
//   }
// }

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => {
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText)
          }

          return response
        })
        .then(response => response.json())
        .then(prices => dispatch(fetchPrices(prices)))
      // .catch(() => dispatch(itemsHasErrored(true)))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Hook)
