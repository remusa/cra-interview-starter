import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'

const Providers: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  return <Router>{children}</Router>
}

ReactDOM.render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById('root')
)
