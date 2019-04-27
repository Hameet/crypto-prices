import React from 'react'

import {
  Wrapper,
  StyledText,
  StyledLink,
  StyledButton
} from './styled/styled-footer'

const Footer = () => {
  return (
    <>
      <Wrapper>
        <StyledButton>
          <StyledLink href='https://alternative.me/crypto/api/'>
            <StyledText>API Documentation</StyledText>
          </StyledLink>
        </StyledButton>

        <StyledLink href='https://github.com/Hameet'>
          <StyledText>Created by</StyledText>
        </StyledLink>
      </Wrapper>
    </>
  )
}

export { Footer }
