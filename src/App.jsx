import React from 'react'
import styled from 'styled-components'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

const Layout = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100vh;
`

function App() {
  return (
    <Layout>
      <Header />
      <Main />
      <Footer />
    </Layout>
  )
}

export default App
