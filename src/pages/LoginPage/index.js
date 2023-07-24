import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

import userService from '../../services/user'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  // 表单提交
  const handleSubmit = async (event) => {
    event.preventDefault()
    //
    try {
      const user = await userService.login({ email, password })
      setUser(user)
      // localStorage
      // window.localStorage.setItem('loggedUser', JSON.stringify(user)) // 弃用
      window.localStorage.setItem('loggedUser', user)
    } catch (exception) {
      console.log(exception)
      console.log('wrong username or password')
    }
  }

  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default LoginPage
