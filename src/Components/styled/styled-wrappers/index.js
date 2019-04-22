import styled from 'styled-components'

const StyledBubble = styled.td`
  content-align: right;
  text-align: center;
  color: white;
  min-width: 100px;
  font-weight: bold;
  font-size: 18px;
  // return str.substring(0, str.length - 1) < 0 ? 'red' : 'green'
`

const Box = styled.span`
  border-radius: 20px;
  background-color: ${({ varied }) => (varied ? 'red' : 'green')}};
`

const Box2 = styled.span`
  border-radius: 20px;
  background-color: ${({ varied24 }) => (varied24 ? 'red' : 'green')}};
`

const Box3 = styled.span`
  border-radius: 20px;
  background-color: ${({ varied7d }) => (varied7d ? 'red' : 'green')}};
`

export { StyledBubble, Box, Box2, Box3 }
