import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {FaSearch, FaBook, FaHistory} from 'react-icons/fa';

const Sidebar = () => {
    return (
        <Navbar className="sidebar" variant="dark" style={{backgroundColor: "#333", flexDirection: "column", padding: "10px", width: "20vw", height: "80vh"}}>
            <Nav className="flex-column " style ={{width: "100%", height: "100%", alignItems: "center",  gap: "10px"}}>
                <Nav.Link href="/search-flight" style={{color: "white",padding:"20px 10px"}}><FaSearch /> Search Flight</Nav.Link>
                <Nav.Link href="/book-flight" style={{color: "white",padding:"20px 10px"}}><FaBook /> Book Flight</Nav.Link>
                <Nav.Link href="/watch-history" style={{color: "white",padding:"20px 10px"}}><FaHistory /> Watch History</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Sidebar;
