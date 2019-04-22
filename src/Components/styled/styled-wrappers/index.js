import styled from 'styled-components'

const StyledBubble = styled.td`
  content-align: right !important;
  text-align: left;
  color: white;
  font-weight: bold;
  font-size: 15px;
  width: 90px;

  // return str.substring(0, str.length - 1) < 0 ? 'red' : 'green'
`

const Box = styled.div`
  margin-left: 50px;
  box-sizing: border-box;
  padding-top: 4px;
  align-content: center;
  border-radius: 20px;
  text-align: center !important;
  margin-left: 5px;
  width: 80px !important;
  height: 20px !important;
  background-color: ${({ varied }) => (varied ? '#ed5565' : 'green')}};
`

const Box2 = styled.div`
  margin-left: 50px;
  box-sizing: border-box;
  padding-top: 4px;
  align-content: center;
  border-radius: 20px;
  text-align: center !important;
  margin-left: 5px;
  width: 80px !important;
  height: 20px !important;

  background-color: ${({ varied24 }) => (varied24 ? '#ed5565' : 'green')}};
`

const Box3 = styled.div`
  margin-left: 50px;
  box-sizing: border-box;
  padding-top: 4px;
  align-content: center;
  border-radius: 20px;
  text-align: center !important;
  margin-left: 5px;
  width: 80px !important;
  height: 20px !important;
  background-color: ${({ varied7d }) => (varied7d ? '#ed5565' : 'green')}};
`

export { StyledBubble, Box, Box2, Box3 }
