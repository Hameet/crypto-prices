import styled from 'styled-components'

const StyledTable = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between
  border: 2px solid black;
`

const StyledBubble = styled.div`
  border-radius: 15px;
  content-align: center;
  color: white;
  width: 35px;
  border: 1px solid red;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  font-size: 15px;
  background-color: ${function (reactive) {
    // console.log('reactive', reactive)
    const str = reactive.children
    return str.substring(0, str.length - 1) < 0 ? 'red' : 'green'
  }};
`
const StyledName = styled.p`
  font-family: Arial, Helvetica, sans-serif
  font-weight: bold;
  font-size: 30px;
`
const StyledText = styled.p`
  font-family: Arial, Helvetica, sans-serif
  font-weight: bold;
  font-size: 20px;
`
export { StyledTable, StyledBubble, StyledName, StyledText }
