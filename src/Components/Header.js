import styled from 'styled-components'
import img from '../images/pig.jpeg'

const StyledHeader = styled.div`
  background-image: url(${img});
  width: 100%;
  max-width: 981px;
  height: 380px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #000;
  margin-bottom: 50px;
`

export { StyledHeader }
