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
      <p>
        © 2020{' '}
        <a
          className='link'
          href='https://renems.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          RMS
        </a>
      </p>
    </StyledFooter>
  )
}

export default Footer
