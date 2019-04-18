import styled from 'styled-components'
import { render } from 'react-dom'
import React from 'react'

const StyledTable = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between
  border: 2px solid red;
`
const red = styled.p`
  color: red;
  font-weight: bold;
  font-size: 15px;
`
const columns = [
  {
    dataIndex: 'a',
    key: 1,
    width: 200
  },
  { id: '123', dataIndex: 'b', key: 'b', width: 200 },
  { dataIndex: 'c', key: 'c', width: 200 },
  { dataIndex: 'd', key: 'd', width: 200 },
  { dataIndex: 'e', key: 'e', width: 200 }
]

const Titles = [
  { title: 'Coin', width: 200 },
  { title: 'Price', width: 200 },
  { title: 'MarketCap', width: 200 },
  { title: 'Volume24h', width: 200 },
  { title: 'PriceChange', width: 200 }
]

const BodyRow = styled.tr`
  &:hover {
    background: palevioletred !important;
  }
  font-weight: bold;
  font-size: 15px;
`
const Bodytext = styled.td`
  text-align: center;
  color: blue;
`
const Bodytitle = styled.th`
  color: red;
  font-weight: bold;
  font-size: 30px;
`
const components = {
  body: { cell: Bodytext, row: BodyRow },
  header: { cell: Bodytitle }
}

// const components = {
//   body: {
//     row: BodyRow,
//     cell: Bodytext
//   }
// }

const StyledBubble = styled.div`
  border-radius: 15px;
  content-align: center;
  color: white;
  width: 35px;
  border: 1px solid red;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  font-size: 15px;
  background-color: ${function ({ reactive }) {
    // console.log('props', reactive)
    return reactive ? 'red' : 'green'
  }};
  // {function ({ reactive }) {
  //   console.log('props', reactive)
  //   const str = props.children

  //   return str.substring(0, str.length - 1) < 0 ? 'red' : 'green'
  // }};
`
const StyledName = styled.p`
  font-family: Arial, Helvetica, sans-serif
  font-weight: bold;
  font-size: 30px;
`
const StyledText = styled.p`
  font-family: Arial, Helvetica, sans-serif
  font-weight: bold;
  font-size: 20px;
`
export {
  StyledTable,
  StyledBubble,
  StyledName,
  StyledText,
  columns,
  components,
  Titles
}
