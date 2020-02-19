import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  .link {
    color: #fff;
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>

      <a
        className='link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </a>
    </StyledHeader>
  )
}

Header.propTypes = {}

export default Header
