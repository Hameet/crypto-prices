import styled from 'styled-components'
import React from 'react'
import { render } from 'react-dom'

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
    title: 'Coin',
    dataIndex: 'a',
    key: 1,
    width: 200
  },
  { id: '123', title: 'Price', dataIndex: 'b', key: 'b', width: 200 },
  { title: 'MarketCap', dataIndex: 'c', key: 'c', width: 200 },
  { title: 'Volume24h', dataIndex: 'd', key: 'd', width: 200 },
  { title: 'PriceChange', dataIndex: 'e', key: 'e', width: 200 }
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
`
const Bodytitle = styled.th`
  content: 'whatever';

  color: red;
`
const components = {
  body: {
    header: Bodytitle,
    row: BodyRow,
    cell: Bodytext
  }
}

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
  components
}
