import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../logo.svg'

const StyledHeader = styled.header`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.25;

  a {
    padding: 1.125rem;
    text-decoration: none;
  }

  .right {
    display: flex;
    justify-content: space-between;
  }

  .link {
    color: #000;
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <div className='left'>
        <Link className='link' to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </div>

      <div className='right'>
        <a
          className='link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>

        <a
          className='link'
          href='https://github.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub
        </a>
      </div>
    </StyledHeader>
  )
}

export default Header
