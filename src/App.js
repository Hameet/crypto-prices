import React from 'react'
import { connect } from 'react-redux'
import { Lines } from 'react-preloading-component'

import DesktopTable from './containers/DesktopTable'
import MobileTable from './containers/MobileTable'
import img from './images/pig.gif'

import { fetchPrices, itemsHasErrored, itemsIsLoading } from './state/actions'

import { StyledHeader, Image } from './Components/styled/styled-header'
import { Footer } from './Components/Footer'
import { Page } from './Components/styled/Page'
import { MobileTop } from './Components/MobileTop'

import Responsive from 'react-responsive'

const Desktop = props => <Responsive {...props} minWidth={992} />
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />
const Mobile = props => <Responsive {...props} maxWidth={767} />

function App ({ getData }) {
  console.log('getdata', getData)
  return (
    <div>
      {' '}
      {getData()}
      <Desktop>
        <Page>
          <StyledHeader>
            <Image src={img} />
          </StyledHeader>
        </Page>
        <DesktopTable />
        <Footer />
      </Desktop>
      <Tablet>
        <Page>
          <StyledHeader>
            <Image src={img} />
          </StyledHeader>
        </Page>
        <DesktopTable />
        <Footer />
      </Tablet>
      <Mobile>
        <MobileTop />
        <MobileTable />
        <Footer />
      </Mobile>
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
            return response.json()
          })
          .then(function (items) {
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
