import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledMain = styled.main`
  flex: 1 0 auto;

  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
`

const Main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Main
