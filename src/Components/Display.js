import React from 'react'
import { map, uniq } from 'ramda'
import Table from 'rc-table'
import { uid } from 'react-uid'

import {
  StyledTable,
  StyledBubble,
  StyledBubble2,
  StyledBubble3,
  StyledName,
  StyledText,
  columns,
  components,
  Titles,
  BodyRow,
  Bodytitle,
  StyledBody,
  StyledHead
} from './styled'

import { RoundOffPrice, RoundOffVol } from '../utilities'

import getPriceVariation from '../state/selectors'

import Wrapper from './wrappers'

const isPositive = factor => factor < 0
const data = [
  { a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '', key: 1 }
]

const Display = ({ rates, variation }) => {
  // return isNil(Names) ? (
  //   'Loading...............................'
  // ) :
  // console.log('key', code)
  return (
    <StyledTable>
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
          const num = x['24h_volume_usd']
          const UsdPrice = RoundOffPrice(x.price_usd)
          const Volume24h = num
            ? RoundOffVol(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            : null
          const cap = x.market_cap_usd
          const MarketCap = cap
            ? RoundOffVol(cap).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            : null
          console.log('percent change', varied)

          const humm = uid(x).replace(/\D/g, '') - 2
          return (
            <BodyRow key={uid(x)}>
              <StyledName>{humm}</StyledName>
              <StyledName>{x.name}</StyledName>{' '}
              <StyledText>{'$' + UsdPrice}</StyledText>
              <StyledText>{'$' + Volume24h}</StyledText>
              <StyledBubble varied={varied}>
                {x.percent_change_1h + '%'}
              </StyledBubble>
              <StyledBubble2 varied24={varied24}>
                {x.percent_change_24h + '%'}
              </StyledBubble2>
              <StyledBubble3 varied7d={varied7d}>
                {x.percent_change_7d + '%'}
              </StyledBubble3>
              <StyledText>{'$' + MarketCap}</StyledText>
              <StyledText>{x.available_supply}</StyledText>
            </BodyRow>
          )
        }, rates)}
      </StyledBody>
    </StyledTable>
  )
}

export default Display

// <Table
//   columns={columns}
//   key={uid(x)}
//   data={dat}
//   components={components}
// />
