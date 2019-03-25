import React, { useState, useEffect } from 'react'
import Display from './Components/Display'
import Form from './Components/Form'

const API_KEY = `89bcb9d40a3fd6b18613ef79499b757e`

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

export default function App () {
  const apiEndpoint = `http://api.coinlayer.com/api/live?access_key=${API_KEY}`
  const userFetchResponse = useFetch(apiEndpoint, {
    isLoading: true,
    data: null
  })
  if (!userFetchResponse.data || userFetchResponse.isLoading) {
    return 'Loading...'
  }
  const { ABC, BTC } = userFetchResponse.data.rates
  console.log('log', userFetchResponse.data.rates)
  return (
    <div>
      {' '}
      Coin: {ABC} {BTC}
    </div>
  )
}
