import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Tab, Nav, Form, Button } from 'react-bootstrap'
// import { Row, Col } from 'react-bootstrap'

import userService from '../../services/user'
import GeneralAlert from '../../components/GeneralAlert'

import './index.css'

const LoginRegister = () => {
  const [activeTab, setActiveTab] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  // const [user, setUser] = useState(null)

  const navigator = useNavigate()

  const handleTabChange = (key) => {
    setActiveTab(key)
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    // TODO: Submit login/register data
    try {
      const user = await userService.login({ email, password })
      window.localStorage.setItem('authToken', user.token)

      setEmail('')
      setPassword('')

      navigator('/dashboard')
    } catch (err) {
      console.log(err)
      setMessage(err)
    }
  }

  const handleRegister = async (event) => {
    event.preventDefault()
    try {
      await userService.createUser({ email, password })
      setActiveTab('login')
      console.log(email, password)
    } catch (err) {
      console.log(err)
      setMessage(err)
    }
  }

  return (
    <div className="container my-5">
      {
        message !== '' && <GeneralAlert message={message} />
      }

      <Tab.Container activeKey={activeTab} onSelect={handleTabChange}>
        <Nav variant="pills" className="mb-3">
          <Nav.Item>
            <Nav.Link eventKey="login">Login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="register">Register</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="login">
            <h3>Login</h3>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Tab.Pane>

          <Tab.Pane eventKey="register">
            <h3>Register</h3>
            <Form onSubmit={handleRegister}>
              {/* <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" placeholder="Enter first name" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" />
                  </Form.Group>
                </Col>
              </Row> */}
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required
                  onChange={(event) => setPassword(event.target.value)}
                  // isValid={password !== ''}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  isValid={password !== '' && password === confirmPassword}
                />
                <Form.Control.Feedback type="valid">
                  密码一致
                </Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  )
}

export default LoginRegister
