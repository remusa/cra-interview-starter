import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './components/HomePage'
import Layout from './components/Layout'

const App: React.FC = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
