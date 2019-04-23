import styled from 'styled-components'

const StyledBubble = styled.td`
  content-align: center !important;
  text-align: left;
  color: white;
  font-weight: bold;
  font-size: 15px;
  text-align: center !important;
  margin: auto;
  width: 100px;
  padding-top: 15px;
  padding-left: 5px;

  // return str.substring(0, str.length - 1) < 0 ? 'red' : 'green'
`

const Box = styled.span`
  display: block;
  box-sizing: border-box;
  align-content: center;
  border-radius: 20px;
  text-align: center !important;

  width: 80px !important;
  height: 20px !important;
  background-color: ${({ varied }) => (varied ? '#ed5565' : 'green')}};
`

const Box2 = styled.span`
  display: block;
  box-sizing: border-box;
  align-content: center;
  border-radius: 20px;
  text-align: center !important;

  width: 80px !important;
  height: 20px !important;

  background-color: ${({ varied24 }) => (varied24 ? '#ed5565' : 'green')}};
`

const Box3 = styled.span`
  display: block;
  box-sizing: border-box;
  align-content: center;
  border-radius: 20px;
  text-align: center !important;

  width: 80px !important;
  height: 20px !important;
  background-color: ${({ varied7d }) => (varied7d ? '#ed5565' : 'green')}};
`

export { StyledBubble, Box, Box2, Box3 }
