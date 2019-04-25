import React from 'react'
import styled from 'styled-components'
import { device } from './device'

const Page = styled.div`
  margin: auto;
  font-family: 'sans-serif';
  text-align: center;

  ${device.laptop`
    max-width: 1050px;
  `}

  ${device.desktop`
    max-width: 1400px;
  `};
`

export { Page }
