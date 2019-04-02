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
  flex: 1;
`
const StyledPrices = styled.div`
  flex: 1;
`

const Display = () => {
  return (
    <StyledContainer>
      <StyledBox>
        <StyledCurrency>
          <p>Bitcoin: </p>
          <p>AION: </p>
          <p>ABC: </p>
        </StyledCurrency>
      </StyledBox>
      <StyledBox>
        <StyledPrices>
          <p>100</p>
          <p>200</p>
          <p>300</p>
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
