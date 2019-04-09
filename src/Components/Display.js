import React from 'react'
import { map } from 'ramda'

import { StyledTable, StyledBubble, StyledName, StyledText } from './styled'

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
          <StyledTable>
            <StyledBubble>{x.percent_change_1h + '%'}</StyledBubble>

            <StyledName>{x.name}</StyledName>
            <StyledText>{'$' + UsdPrice}</StyledText>
            <StyledText>{'$' + Volume24h}</StyledText>
            <StyledText>{'$' + MarketCap}</StyledText>
          </StyledTable>
        )
      }, rates)}
    </>
  )
}

export default Display
