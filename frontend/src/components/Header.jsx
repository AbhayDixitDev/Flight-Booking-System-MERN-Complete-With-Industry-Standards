import {useState} from "react"
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaPowerOff } from "react-icons/fa";

const Header = () => {
    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const logout = () => {
        navigate("/");
    }
    return (
        <Container fluid className="header" >
            <Row style={{ alignItems:"center"}}>
                <Col>
                    <h1>Welcome {username} to Flight Booking System</h1>
                </Col>
                <Col className="d-flex justify-content-end">
                    <FaPowerOff className="logout-icon" style={{cursor:"pointer", color:"red", fontSize:"30px"}} onClick={logout} />
                </Col>
            </Row>
        </Container>
    )
}

export default Header;
