import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
// import Dashboard from './pages/Dashboard'

const routes = [
  {
    path: '/',
    name: 'home',
    element: Home
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    // element: Dashboard
  }
]

const Routes = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} />
        ))}
      </Switch>
    </Router>
  )
}

export default Routes
