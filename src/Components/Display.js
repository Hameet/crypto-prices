import React from 'react'
import { map } from 'ramda'
import Table from 'rc-table'
import { uid } from 'react-uid'

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
const data = [
  { a: '', b: '', c: '', d: '', e: '', f: '', g: '', h: '', key: 1 }
]

const Display = ({ rates, variation }) => {
  // return isNil(Names) ? (
  //   'Loading...............................'
  // ) :
  // console.log('key', code)
  return (
    <>
      {/* <Table columns={Titles} data={data} components={components} /> */}
      {map((x, index) => {
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
            a: <StyledName key={uid(x)}>{x.name}</StyledName>,

            b: <StyledText>{'$' + UsdPrice}</StyledText>,
            c: <StyledText>{'$' + Volume24h}</StyledText>,
            d: (
              <StyledBubble varied={varied}>
                {x.percent_change_1h + '%'}
              </StyledBubble>
            ),
            e: (
              <StyledBubble varied={varied}>
                {x.percent_change_24h + '%'}
              </StyledBubble>
            ),
            f: (
              <StyledBubble varied={varied}>
                {x.percent_change_7d + '%'}
              </StyledBubble>
            ),
            g: <StyledText>{'$' + MarketCap}</StyledText>,
            h: <StyledText>{x.available_supply}</StyledText>
          }
        ]

        return (
          // <Table
          //   columns={columns}
          //   key={uid(x)}
          //   data={dat}
          //   components={components}
          // />
          <StyledTable key={uid(x)}>
            <StyledBubble varied={varied}>
              {x.percent_change_1h + '%'}
            </StyledBubble>
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
