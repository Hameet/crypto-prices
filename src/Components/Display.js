import React from 'react'
import { map } from 'ramda'
import styled from 'styled-components'

import { RoundOffPrice, RoundOffVol } from '../utilities'

const Li = styled.li`
  font-size: 2em;
  padding: 0 1em;
  align-content: center;
  list-style: none;
`
const Price1h = styled.div`
  border-radius: 15px;
  content-align: center;
  color: white;
  width: 35px;
  border: 1px solid red;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  font-size: 15px;
  background-color: ${function (reactive) {
    // console.log('reactive', reactive)
    const str = reactive.children
    return str.substring(0, str.length - 1) < 0 ? 'red' : 'green'
  }};
`
const Name = styled.p`
font-family: Arial, Helvetica, sans-serif
  font-weight: bold;
  font-size: 30px;
`
const Vol24h = styled.p`
font-family: Arial, Helvetica, sans-serif
  font-weight: bold;
  font-size: 20px;
`
const Display = ({ rates }) => {
  // return isNil(Names) ? (
  //   'Loading...............................'
  // ) :
  console.log('reactive')
  return (
    <ul>
      {map(x => {
        const num = x['24h_volume_usd']
        const UsdPrice = RoundOffPrice(x.price_usd)
        const Volume24h = num
          ? RoundOffVol(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          : null
        const cap = x.market_cap_usd
        const MarketCap = cap
          ? RoundOffVol(cap).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          : null
        console.log('type', x.market_cap_usd)
        return (
          <ul>
            <Li>
              <Price1h>{x.percent_change_1h + '%'}</Price1h>
            </Li>
            <Li>
              <Name>{x.name}</Name>
            </Li>
            <Li>
              <Vol24h>{'$' + UsdPrice}</Vol24h>
            </Li>
            <Li>
              <Vol24h>{'$' + Volume24h}</Vol24h>
            </Li>
            <Li>
              <Vol24h>{'$' + MarketCap}</Vol24h>
            </Li>
          </ul>
        )
      }, rates)}
    </ul>
  )
}

export default Display
