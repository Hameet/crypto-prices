import styled from 'styled-components'

const StyledBubble = styled.td`
  content-align: right;
  text-align: center;
  color: white;

  font-weight: bold;
  font-size: 15px;
  // return str.substring(0, str.length - 1) < 0 ? 'red' : 'green'
`

const Box = styled.span`
  border-radius: 20px;
  min-width: 200px;
  margin-left: 10px;
  padding: 5px;
  background-color: ${({ varied }) => (varied ? '#ed5565' : 'green')}};
`

const Box2 = styled.span`
  border-radius: 20px;
  padding: 5px;
  background-color: ${({ varied24 }) => (varied24 ? '#ed5565' : 'green')}};
`

const Box3 = styled.span`
  border-radius: 20px;
  padding: 5px;
  background-color: ${({ varied7d }) => (varied7d ? '#ed5565' : 'green')}};
`

export { StyledBubble, Box, Box2, Box3 }
