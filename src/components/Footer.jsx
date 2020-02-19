import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Footer = () => {
  return (
    <StyledFooter>
      <p>2020</p>
    </StyledFooter>
  )
}

export default Footer
