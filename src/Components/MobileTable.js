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
  SecondColumn,
  BigWrapper,
  HeadRow
} from './styled/MobileTable'

import { StyledBubble, Box, Box2, Box3 } from './styled/styled-wrappers'

import {
  RoundOffPrice,
  VolumeConvert,
  ConvertSupply,
  isPositive
} from '../utilities'

const MobileTable = ({ rates }) => {
  return (
    <StyledTable>
      <StyledHead>
        <HeadRow>
          {/* <Bodytitle>#</Bodytitle> */}
          <Bodytitle>Coin</Bodytitle>
          <Bodytitle>USD</Bodytitle>
          <Bodytitle>24h</Bodytitle>
        </HeadRow>
      </StyledHead>

      <StyledBody>
        {map(x => {
          const varied24 = isPositive(x.percent_change_24h)
          const UsdPrice = RoundOffPrice(x.price_usd)
          const Volume24h = VolumeConvert(x['24h_volume_usd'])
          const Num = uid(x).replace(/\D/g, '') - 2
          return (
            <BodyRow key={uid(x)}>
              {/* <StyledText>{Num}</StyledText> */}
              <StyledName>{x.symbol}</StyledName>{' '}
              <StyledText>{'$' + UsdPrice}</StyledText>
              <StyledBubble>
                <Box2 varied24={varied24}>{x.percent_change_24h + '%'}</Box2>
              </StyledBubble>
            </BodyRow>
          )
        }, rates)}
      </StyledBody>
    </StyledTable>
  )
}

export default MobileTable
