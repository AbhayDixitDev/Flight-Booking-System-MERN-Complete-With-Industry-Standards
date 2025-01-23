import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {FaLock, FaPlane, FaPlus} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const AdminSidebar = () => {
    return (
        <Navbar className="sidebar" bg='dark' variant="dark" style={{backgroundColor: "#333", flexDirection: "column", padding: "10px", width: "15vw", height: "80vh"}}>
            <Nav className="flex-column " style ={{width: "100%", height: "100%", alignItems: "center",  gap: "10px"}}>
                <Nav.Link as={Link} to="/admin/addFlight" style={{color: "white",padding:"20px 10px", display: "flex", alignItems: "center"}}><FaPlus /> Add Flight</Nav.Link>
                <Nav.Link as={Link} to="/admin/addAirline" style={{color: "white",padding:"20px 10px", display: "flex", alignItems: "center"}}><FaPlus /> Add Airline</Nav.Link>
                <Nav.Link as={Link} to="/admin/addAirport" style={{color: "white",padding:"20px 10px", display: "flex", alignItems: "center"}}><FaPlus /> Add Airport</Nav.Link>
                <Nav.Link as={Link} to="/admin/changePassword" style={{color: "white",padding:"20px 10px", display: "flex", alignItems: "center"}}><FaLock /> Change Password</Nav.Link>
            </Nav>
        </Navbar>
         
    );
};

export default AdminSidebar