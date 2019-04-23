import React from 'react'
import { map } from 'ramda'
import { uid } from 'react-uid'

import {
  StyledTable,
  StyledName,
  StyledText,
  BodyRow,
  Bodytitle,
  StyledBody,
  StyledHead,
  FirstColumn,
  SecondColumn
} from './styled'

import { StyledBubble, Box, Box2, Box3 } from './styled/styled-wrappers'

import {
  RoundOffPrice,
  VolumeConvert,
  ConvertSupply,
  isPositive
} from '../utilities'

const Display = ({ rates }) => {
  return (
    <StyledTable>
      {/* <FirstColumn />
      <SecondColumn /> */}
      <StyledHead>
        <BodyRow>
          <Bodytitle>#</Bodytitle>
          <Bodytitle>Coin</Bodytitle>
          <Bodytitle>USD Price</Bodytitle>
          <Bodytitle>Volume24h</Bodytitle>
          <Bodytitle>1h</Bodytitle>
          <Bodytitle>24h</Bodytitle>
          <Bodytitle>7d</Bodytitle>
          <Bodytitle>MarketCap</Bodytitle>
          <Bodytitle>Available Supply</Bodytitle>
        </BodyRow>
      </StyledHead>

      <StyledBody>
        {map(x => {
          const varied = isPositive(x.percent_change_1h)
          const varied24 = isPositive(x.percent_change_24h)
          const varied7d = isPositive(x.percent_change_7d)
          const UsdPrice = RoundOffPrice(x.price_usd)
          const Volume24h = VolumeConvert(x['24h_volume_usd'])
          const MarketCap = VolumeConvert(x.market_cap_usd)
          const AvailableSupply = ConvertSupply(x.available_supply)

          console.log('percent change', typeof AvailableSupply)

          const Num = uid(x).replace(/\D/g, '') - 2
          return (
            <BodyRow key={uid(x)}>
              <StyledText>{Num}</StyledText>
              <StyledName>{x.symbol}</StyledName>{' '}
              <StyledText>{'$' + UsdPrice}</StyledText>
              <StyledText>{'$' + Volume24h}</StyledText>
              <StyledBubble>
                <Box varied={varied}>{x.percent_change_1h + '%'}</Box>
              </StyledBubble>
              <StyledBubble>
                <Box2 varied24={varied24}>{x.percent_change_24h + '%'}</Box2>
              </StyledBubble>
              <StyledBubble>
                <Box3 varied7d={varied7d}>{x.percent_change_7d + '%'}</Box3>
              </StyledBubble>
              <StyledText>{'$' + MarketCap}</StyledText>
              <StyledText>{AvailableSupply}</StyledText>
            </BodyRow>
          )
        }, rates)}
      </StyledBody>
    </StyledTable>
  )
}

export default Display
