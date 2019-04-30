import React from 'react'

import { Wrapper, StyledText, StyledLink } from './styled/styled-footer'

const Footer = () => {
  return (
    <>
      <Wrapper>
        <StyledLink href='https://alternative.me/crypto/api/'>
          <StyledText>API Documentation</StyledText>
        </StyledLink>

        <StyledLink href='https://github.com/Hameet'>
          <StyledText>Created by</StyledText>
        </StyledLink>
      </Wrapper>
    </>
  )
}

export { Footer }
