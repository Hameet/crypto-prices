import styled from 'styled-components'

import { device } from '../device'

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
  box-shadow: 5px 5px #ccc;
  padding: 10px;
  margin: 10px;
  margin-bottom: 40px;
  ${device.laptop`
    flex-direction: row;
  `};
`

const Image = styled.img``
export { StyledHeader, Image }
