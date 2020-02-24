import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Main from './components/layout/Main'
import HomePage from './components/HomePage'

const Layout = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100vh;
`

const App: React.FC = () => {
  return (
    <Layout>
      <Header />

      <Main>
        <Switch>
          {/* <Route path='/example'>
            <ExamplePage />
          </Route> */}

          <Route exact path='/'>
            <HomePage />
          </Route>
        </Switch>
      </Main>

      <Footer />
    </Layout>
  )
}

export default App
