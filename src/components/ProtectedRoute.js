import React from 'react'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProtectedRoute = (props) => {
  // ProtectedRoute HOC 权限校验高阶组件

  ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired
  }

  const authToken = window.localStorage.getItem('authToken')
  const isAuthenticated = !!authToken

  if (!isAuthenticated) {
    console.log('not authed')
    return <Navigate to={{ pathname: '/login-register' }} />
  }

  return <>
    {props.children}
  </>
}

export default ProtectedRoute
