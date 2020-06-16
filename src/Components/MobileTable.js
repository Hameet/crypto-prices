import React from 'react'
import { map } from 'ramda'
import { uid } from 'react-uid'
import Eye from './styled/Eye/Eye'

import {
  StyledTable,
  StyledName,
  StyledText,
  BodyRow,
  Bodytitle,
  StyledBody,
  StyledHead,
  HeadRow
} from './styled/MobileTable'

import { StyledBubble, Box2 } from './styled/styled-wrappers'

import {
  RoundOffPrice,
  isPositive,
  RoundOffBig,
  RoundOffPercentage
} from '../utilities'

const MobileTable = ({ rates }) => {
  return rates.length === 2 ? (
    <Eye />
  ) : rates.length === 100 ? (
    <StyledTable>
      <StyledHead>
        <HeadRow>
          <Bodytitle>Coin</Bodytitle>
          <Bodytitle>USD</Bodytitle>
          <Bodytitle>24h</Bodytitle>
          <Bodytitle>Cap</Bodytitle>
        </HeadRow>
      </StyledHead>

      <StyledBody>
        {map(x => {
          const varied24 = isPositive(x.percent_change_24h)
          const UsdPrice = RoundOffPrice(x.price_usd)
          const MarketCap = RoundOffBig(x.market_cap_usd)

          return (
            <BodyRow key={uid(x)}>
              <StyledName>{x.symbol}</StyledName>{' '}
              <StyledText>{'$' + UsdPrice}</StyledText>
              <StyledBubble>
                <Box2 varied24={varied24}>
                  {RoundOffPercentage(x.percent_change_24h) + '%'}
                </Box2>
              </StyledBubble>
              <StyledText>{'$' + MarketCap}</StyledText>
            </BodyRow>
          )
        }, rates)}
      </StyledBody>
    </StyledTable>
  ) : null
}

export default MobileTable
