import React from 'react'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const LeitnerNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">SM-2 System</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='/login-register'>LoginRegister</Nav.Link>
          <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
          <Nav.Link href='/learning'>Learning</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default LeitnerNavbar
