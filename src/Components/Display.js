import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
`
const StyledBox = styled.div`
  border: 2px #ccc solid;
  padding: 10px;
  text-align: center;
`
const StyledCurrency = styled.div`
  padding: 5em;
`
const StyledPrices = styled.div`
  padding: 5em;
`
const StyledRowOne = styled.p`
  color: red;
  font-size: 2em;
`
const StyledRowTwo = styled.p`
  color: orange;
  font-size: 2em;
`
const StyledRowThree = styled.p`
  color: green;
  font-size: 2em;
`

const Display = () => {
  return (
    <StyledContainer>
      <StyledBox>
        <StyledCurrency>
          <StyledRowOne>Bitcoin: </StyledRowOne>
          <StyledRowTwo>AION: </StyledRowTwo>
          <StyledRowThree>ABC: </StyledRowThree>
        </StyledCurrency>
      </StyledBox>
      <StyledBox>
        <StyledPrices>
          <StyledRowOne>100</StyledRowOne>
          <StyledRowTwo>200</StyledRowTwo>
          <StyledRowThree>300</StyledRowThree>
        </StyledPrices>
      </StyledBox>
    </StyledContainer>
  )
}

// const Display = ({ prices }) => {
//   if (prices == undefined) {
//     return 'Nothing'
//   }
//   const { ABC, BTC, AION } = prices

//   return (
//     <div>
//       <p>
//         <StyledBtc> Bitcoin: 100 {BTC}</StyledBtc>
//         <StyledAion> AION: 100{AION}</StyledAion>
//         <StyledAbc> ABC: 100{ABC}</StyledAbc>
//       </p>
//     </div>
//   )
// }

export default Display
