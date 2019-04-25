import React from 'react'
import { connect } from 'react-redux'

import Display from './containers/Display'
import img from './images/pig.gif'

import { fetchPrices, itemsHasErrored, itemsIsLoading } from './state/actions'

import { StyledHeader, Image } from './Components/styled/Header'
import { Footer } from './Components/Footer'
import { Page } from './Components/styled/Page'

function App ({ getData }) {
  return (
    <div>
      {' '}
      {getData()}
      <Page>
        <StyledHeader>
          <Image src={img} />
        </StyledHeader>
      </Page>
      <Display />
      <Footer />
    </div>
  )
}

const apiUrl = `https://api.alternative.me/v1/ticker/`
const proxyurl = 'https://cors-anywhere.herokuapp.com/'

function mapDispatchToProps (dispatch) {
  return {
    getData: () => {
      dispatch(itemsIsLoading(true))
      typeof window !== 'undefined' &&
        window
          .fetch(proxyurl + apiUrl)
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
            console.log('app', items)
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
