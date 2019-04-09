import React from 'react'
import { map } from 'ramda'

import { Table, Price1h, Name, Vol24h } from './styled'

import { RoundOffPrice, RoundOffVol } from '../utilities'

const Display = ({ rates }) => {
  // return isNil(Names) ? (
  //   'Loading...............................'
  // ) :
  console.log('reactive')
  return (
    <>
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
          <Table>
            <Price1h>{x.percent_change_1h + '%'}</Price1h>

            <Name>{x.name}</Name>
            <Vol24h>{'$' + UsdPrice}</Vol24h>
            <Vol24h>{'$' + Volume24h}</Vol24h>
            <Vol24h>{'$' + MarketCap}</Vol24h>
          </Table>
        )
      }, rates)}
    </>
  )
}

export default Display
