import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const UserFooter = () => {
  return (
    <footer className="footer py-3" style={{ backgroundColor: "#000", color: "white",height:"10vh" }}>
      <Container bg='dark' variant="dark">
        <Row>
          <Col md={4}>
            <p className="text-center  " style={{ fontSize: "14px" ,color:"#fff"}}>
              Copyright &copy; {new Date().getFullYear()} Flight Booking System. All rights reserved.
            </p>
          </Col>
          <Col md={4}>
            <p className="text-center text-muted">
              Developed by <a href="https://github.com/abhaydixitdev" style={{color:"#fff", textDecoration:"none"}}target="_blank" rel="noopener noreferrer">Abhay Dixit</a>
            </p>
          </Col>
          <Col md={4}>
            <div className="text-center" style={{ display: "flex", justifyContent: "center" }}>
              <a href="https://github.com/abhaydixitdev" target="_blank" rel="noopener noreferrer" style={{color:"#fff", textDecoration:"none"}}>
                <FaGithub size={30} className="mx-2" />
              </a>
              <a href="https://twitter.com/abhaydixitji" target="_blank" rel="noopener noreferrer" style={{color:"#fff", textDecoration:"none"}}>
                <FaTwitter size={30} className="mx-2" />
              </a>
              <a href="https://www.instagram.com/abhaydixitji" target="_blank" rel="noopener noreferrer" style={{color:"#fff", textDecoration:"none"}}>
                <FaInstagram size={30} className="mx-2" />
              </a>
              <a href="https://www.linkedin.com/in/abhaydixitdev" target="_blank" rel="noopener noreferrer" style={{color:"#fff", textDecoration:"none"}}>
                <FaLinkedin size={30} className="mx-2" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default UserFooter