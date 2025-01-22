import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { FaPowerOff } from 'react-icons/fa'
import logo from '../../assets/images/flight_logo.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios";

const UserHeader = () => {
    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const logout = () => {
        console.log("logout");
        
        axios.get("http://localhost:8000/api/user/logout",{withCredentials:true}).then((res) => {
            console.log(res);
            
            if(res.data.statusCode === 200){
                console.log(res.data.message);
                
                localStorage.removeItem("userType");
                navigate("/");
            }
        })
    }
    return (
        <Navbar bg="dark" variant="dark" style={{height:"10vh"}} >
        <Container>
          <Navbar.Brand href="#home">
            User Dashboard
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

export default UserHeader;
