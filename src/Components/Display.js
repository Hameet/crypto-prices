import React from 'react'
import { map } from 'ramda'
import Table from 'rc-table'

import {
  StyledTable,
  StyledBubble,
  StyledName,
  StyledText,
  columns,
  components,
  Titles
} from './styled'

import { RoundOffPrice, RoundOffVol } from '../utilities'

import getPriceVariation from '../state/selectors'

import Wrapper from './wrappers'

const isPositive = factor => factor < 0
const data = ['']

const Display = ({ rates, variation }) => {
  // return isNil(Names) ? (
  //   'Loading...............................'
  // ) :
  console.log('DisplayComp', variation)
  return (
    <>
      <Table columns={Titles} data={data} components={components} />
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

        const dat = [
          {
            a: <StyledName>{x.name}</StyledName>,
            key: 1,
            b: <StyledText>{'$' + UsdPrice}</StyledText>,
            c: <StyledText>{'$' + Volume24h}</StyledText>,
            d: <StyledText>{'$' + MarketCap}</StyledText>,
            e: (
              <StyledBubble variation={variation}>
                {x.percent_change_1h + '%'}
              </StyledBubble>
            )
          }
        ]

        return (
          <Table columns={columns} data={dat} components={components} />
          /* <NewStyle>{x.percent_change_1h + '%'}</NewStyle>
            <StyledName>{x.name}</StyledName>
            <StyledText>{'$' + UsdPrice}</StyledText>
            <StyledText>{'$' + Volume24h}</StyledText>
            <StyledText>{'$' + MarketCap}</StyledText> */
        )
      }, rates)}
    </>
  )
}

export default Display
