import styled from 'styled-components'

import { device } from '../device'

const BigWrapper = styled.div`
  margin: auto;
  font-family: 'sans-serif';
  text-align: center;

  ${device.laptop`
    max-width: 800px;
  `}

  ${device.desktop`
    max-width: 1400px;
  `};
`

const StyledTable = styled.div`
@media ${device.laptop} {
  flex-direction: row;
}
@media ${device.mobileL} {
  flex-direction: row;
}
  display: table;
  overflow-x:auto;
  table-layout: auto;
  justify-content: center;
  justify-content: space-between
  border-collapse: collapse;  
  width:80%; 
    margin-left:10%; 
    margin-right:25%;
  min-width: 910px
  padding-left: 50px;
  box-sizing: border-box;
  border-spacing: 0px;
`
const BodyRow = styled.tr`
  &:hover {
    background: #ffff99 !important;
  }
  font-weight: bold;
  font-size: 15px;
  padding-top: 15px;
`
const Bodytext = styled.td`
  text-align: center;
  color: blue;
`
const Bodytitle = styled.th`
  color: black;
  font-weight: bold;
  font-size: 20px;
  background: #dd7b7b;
  border: top 2px top;
  border-radius: 10px;
  padding-top: -55px;
  line-height: 40px;
  // width: 50px;
`

const components = {
  body: { cell: Bodytext, row: BodyRow },
  header: { cell: Bodytitle }
}

const StyledHead = styled.thead`
  margin-top: -25px;
  box-sizing: border-box; 
}
`
const StyledBody = styled.tbody`
  border-collapse: collapse;
  margin-left: 50px;
  // width: 100%;
`

const StyledColumn = styled.colgroup`
  width: 2em;
`

const FirstColumn = styled.col`
  width: 15em;
`
const SecondColumn = styled.col`
  width: 15em;
`

const StyledName = styled.td`
  font-family: Arial, Helvetica, sans-serif
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  padding-top: 20px;
  margin: 0 auto;
  color: purple;
  
`
const StyledText = styled.td`
  font-family: Arial, Helvetica, sans-serif
  font-weight: bold;
  font-size: 18px;
  color: #428bca;;
  text-align: center;
  padding-top: 20px;
  // width: 70px;
`
export {
  BigWrapper,
  StyledColumn,
  FirstColumn,
  SecondColumn,
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
