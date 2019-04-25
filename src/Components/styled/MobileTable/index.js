import styled from 'styled-components'

// import { device } from './device'

const BigWrapper = styled.div`
  margin: auto;
  font-family: 'sans-serif';
  text-align: center;
`

const StyledTable = styled.table`
  background-color: whitesmoke !important;
  display: table !important;
  overflow-x:auto;
  table-layout: auto;
  justify-content: center;
  justify-content: space-between
  border-collapse: collapse;  
  width:100%; 
    // margin-left:10%; 
    // margin-right:25%;
  max-width: 440px
  padding-left: 50px;
  box-sizing: border-box;
  border-spacing: 0px;
`
const BodyRow = styled.tr`
  &:hover {
    background: #f2d2c4 !important;
    transform: scale(1.1);
    height: 10px;
  }
  font-weight: bold;
  font-size: 15px;
  padding-top: 10px;
  align-content: center;
`

const HeadRow = styled.tr`
  font-weight: bold;
  font-size: 15px;
  padding-top: 10px;
  align-content: center;
  border-bottom: 5px solid white;
  border-top: 5px solid white;
  border: top 2px top;
  color: transparent;
  box-shadow: 0 1px 10px #000000;
  padding: 0.1em 0;

  background-color: #ccc;
`

const Bodytext = styled.td`
  text-align: center;
  color: blue;
`
const Bodytitle = styled.th`
  color: black;
  font-weight: bold;
  font-size: 20px;
  // background: #dd7b7b;
  // width: 50px;
`

const components = {
  body: { cell: Bodytext, row: BodyRow },
  header: { cell: Bodytitle }
}

const StyledHead = styled.thead`
  margin-bottom: 20px;
  box-sizing: border-box; 
  content: "-";
    // display: block; 
  border-radius: 10px;
  padding-top: -60px;
  line-height: 40px;
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
  padding-top: 10px;
  margin: 0 auto;
  color: purple;
  
`
const StyledText = styled.td`
  font-family: Arial, Helvetica, sans-serif
  font-weight: bold;
  font-size: 18px;
  color: #428bca;;
  text-align: center;
  padding-top: 10px;
  // padding-bottom: 10px;
  align-content: center;
  // width: 70px;
`
export {
  BigWrapper,
  StyledTable,
  StyledName,
  StyledText,
  StyledBody,
  StyledHead,
  columns,
  components,
  HeadRow,
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
