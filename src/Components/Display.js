import React from 'react'
import { map, uniq } from 'ramda'
import Table from 'rc-table'
import { uid } from 'react-uid'

import {
  StyledTable,
  StyledBubble,
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
          <Bodytitle>Coin</Bodytitle>
          <Bodytitle>Coin</Bodytitle>
        </BodyRow>
      </StyledHead>

      <StyledBody>
        {map(x => {
          const NewStyle = Wrapper(StyledBubble)
          const factor = x.percent_change_1h
          const varied = isPositive(x.percent_change_1h)
          const num = x['24h_volume_usd']
          const UsdPrice = RoundOffPrice(x.price_usd)
          const Volume24h = num
            ? RoundOffVol(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            : null
          const cap = x.market_cap_usd
          const MarketCap = cap
            ? RoundOffVol(cap).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            : null
          console.log('percent change')

          return (
            <BodyRow key={uid(x)}>
              <StyledName>{x.name}</StyledName>{' '}
              <StyledText>{'$' + UsdPrice}</StyledText>
              <StyledText>{'$' + Volume24h}</StyledText>
              <StyledBubble varied={varied}>
                {x.percent_change_1h + '%'}
              </StyledBubble>
              <StyledBubble varied={varied}>
                {x.percent_change_24h + '%'}
              </StyledBubble>
              <StyledBubble varied={varied}>
                {x.percent_change_7d + '%'}
              </StyledBubble>
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
