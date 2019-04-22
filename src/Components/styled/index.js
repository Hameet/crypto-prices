import styled from 'styled-components'
import { map, forEach } from 'ramda'

const StyledTable = styled.table`
  // display: flex;
  justify-content: center;
  justify-content: space-between
  border-collapse: collapse;  
  width: 100%;
  border: 1px solid #ddd;
  style="overflow-x:auto";
  border-spacing: 10px;
  // table-layout: fixed ;
`
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
  color: #4a4a4a;
  background: #fff;

  // font-weight: 700;
  // padding-left: 5px;
  // padding-right: 5px;
  // text-align: left;
  // vertical-align: middle;
  // white-space: nowrap;
  // overflow: hidden;
  // line-height: 0;
  padding-top: -50px;
`
const components = {
  body: { cell: Bodytext, row: BodyRow },
  header: { cell: Bodytitle }
}

const StyledHead = styled.thead`
  margin-top: -25px;
 
}
`
const StyledBody = styled.tbody`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 1px solid #ddd;
`

const StyledColumn = styled.colgroup`
  width: 2em;
`

const FirstColumn = styled.col`
  width: 5em;
`

const StyledName = styled.td`
  font-family: Arial, Helvetica, sans-serif
  font-weight: bold;
  font-size: 30px;
  
`
const StyledText = styled.td`
  font-family: Arial, Helvetica, sans-serif
  font-weight: bold;
  font-size: 20px;
   
`
export {
  StyledColumn,
  FirstColumn,
  StyledTable,
  StyledName,
  StyledText,
  StyledBody,
  StyledHead,
  columns,
  components,
  Titles,
  BodyRow,
  Bodytitle
}

const columns = [
  {
    dataIndex: 'a',
    key: 1,
    width: 200
  },
  { dataIndex: 'b', key: 2, width: 200 },
  { dataIndex: 'c', key: 'c', width: 200 },
  { dataIndex: 'd', key: 'd', width: 200 },
  { dataIndex: 'e', key: 'e', width: 200 },
  { dataIndex: 'f', key: 'f', width: 200 },
  { dataIndex: 'g', key: 'g', width: 200 },
  { dataIndex: 'h', key: 'h', width: 200 }
]

const Titles = [
  { title: 'Coin', width: 200 },
  { title: 'Price', width: 200 },

  { title: 'Volume24h', width: 200 },
  { title: 'PriceChange-1h', width: 200 },
  { title: 'PriceChange-24h', width: 200 },
  { title: 'PriceChange-7d', width: 200 },
  { title: 'MarketCap', width: 200 },
  { title: 'Available-Supply', width: 200 }
]
