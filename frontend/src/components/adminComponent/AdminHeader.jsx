import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { FaPowerOff } from 'react-icons/fa'
import logo from '../../assets/images/flight_logo.png'
const AdminHeader = () => {
  const logout = () => {
    console.log('logout')
    localStorage.removeItem('userType')
    window.location.href = '/'
  }

  return (
    <Navbar bg="dark" variant="dark" style={{height:"10vh"}} >
      <Container>
        <Navbar.Brand href="#home">
          Admin Dashboard
        </Navbar.Brand>
        <Nav className="me-auto">
        </Nav>
        <Nav>
          <Nav.Link  onClick={logout} style={{ color: 'white', fontSize: '20px', display: 'flex', alignItems: 'center' }}>
            Logout &nbsp; &nbsp; <FaPowerOff style={{ cursor: 'pointer', color: 'red', fontSize: '30px' }} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default AdminHeader