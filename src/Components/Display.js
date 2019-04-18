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

const Display = ({ rates, Prices_1h }) => {
  // return isNil(Names) ? (
  //   'Loading...............................'
  // ) :
  console.log('DisplayComp', Prices_1h)
  return (
    <>
      <Table columns={Titles} data={data} />
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
            a: x.name,
            key: 1,
            b: '$' + UsdPrice,
            c: '$' + Volume24h,
            d: '$' + MarketCap,
            e: <StyledBubble>{x.percent_change_1h + '%'}</StyledBubble>
          }
        ]

        return (
          <Table columns={columns} components={components} data={dat} />
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
