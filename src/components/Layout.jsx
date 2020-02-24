import React from 'react'
import styled from 'styled-components'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Main from './layout/Main'

const StyledLayout = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </StyledLayout>
  )
}

export default Layout
