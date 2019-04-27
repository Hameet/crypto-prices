import styled, { keyframes } from 'styled-components'

const MobileHeader = styled.div`
  margin-bottom: 20px;
  flex-direction: row;
  left: 0;
  bottom: 0;
  font-size: 20px;
  font-weight: bold;
  background-color: #ed5565;
  color: white;
  width: 100%;
  text-align: center;
  padding-top: 70px;
  padding-bottom: 15px;
`
const transition = keyframes`
from {
    transform: rotate(0deg);
  }
to {

    text-shadow: 0 0 4px #fff, 0 0 8px #fff, 0 0 12px #d25ed4, 0 0 16px #d25ed4,
    0 0 20px #d25ed4, 0 0 24px #d25ed4, 0 0 28px #d25ed4;
}
`

const GlowingText = styled.p`
  font-size: 60px;
  font-family: 'Futura';
  color: black;
  //   text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #ff0080, 0 0 30px #ff0080,
  //     0 0 40px #ff0080, 0 0 55px #ff0080, 0 0 75px #ff0080;
  text-align: center;
  animation: ${transition} 2s linear infinite;
`

export { MobileHeader, GlowingText }
