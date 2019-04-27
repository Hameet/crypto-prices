import styled from 'styled-components'

const StyledTable = styled.table`
  background-color: whitesmoke !important;
  display: table !important;
  overflow-x:auto;
  table-layout: auto;
  justify-content: center;
  justify-content: space-between
  border-collapse: collapse;  
  width:100%; 
  max-width: 414px;
  box-sizing: border-box;
  border-spacing: 0px;
`
const BodyRow = styled.tr`
  &:hover {
    background: #ffffcc !important;
    height: 10px;
  }
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
  background-color: #ed5565;
`
const Bodytitle = styled.th`
  color: black;
  font-weight: bold;
  font-size: 20px;
`

const StyledHead = styled.thead`
  margin-bottom: 20px;
  box-sizing: border-box;   
  border-radius: 10px;
  padding-top: -60px;
  line-height: 40px;
}
`
const StyledBody = styled.tbody``

const StyledName = styled.td`
  font-family: Arial, Helvetica, sans-serif
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  padding-top: 10px;
  margin: 0 auto;  
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
  StyledTable,
  StyledName,
  StyledText,
  StyledBody,
  StyledHead,
  HeadRow,
  BodyRow,
  Bodytitle
}
