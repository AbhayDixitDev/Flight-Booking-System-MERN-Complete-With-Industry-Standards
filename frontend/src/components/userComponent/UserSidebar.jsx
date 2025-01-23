import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {FaLock, FaPlane, FaPlus} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const UserSidebar = () => {
    return (
        <Navbar className="sidebar" bg='dark' variant="dark" style={{backgroundColor: "#333", flexDirection: "column", padding: "10px", width: "15vw", height: "80vh"}}>
            <Nav className="flex-column " style ={{width: "100%", height: "100%", alignItems: "center",  gap: "10px"}}>
                <Nav.Link as={Link} to="/user/searchFlight" style={{color: "white",padding:"20px 10px", display: "flex", alignItems: "center"}}><FaPlus /> Search Flight</Nav.Link>
                <Nav.Link as={Link} to="/user/bookFlight" style={{color: "white",padding:"20px 10px", display: "flex", alignItems: "center"}}><FaPlane /> Book Flight</Nav.Link>
                <Nav.Link as={Link} to="/user/myBookings" style={{color: "white",padding:"20px 10px", display: "flex", alignItems: "center"}}><FaPlane /> My Bookings</Nav.Link>
                <Nav.Link as={Link} to="/user/changePassword" style={{color: "white",padding:"20px 10px", display: "flex", alignItems: "center"}}><FaLock /> Change Password</Nav.Link>
            </Nav>
        </Navbar>
         
    );
};

export default UserSidebar