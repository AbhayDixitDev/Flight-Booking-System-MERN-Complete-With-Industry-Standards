import {useState} from "react"
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaPowerOff } from "react-icons/fa";
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
        <Container fluid className="header" >
            <Row style={{ alignItems:"center"}}>
                <Col>
                    <h1>Welcome {username} to Flight Booking System</h1>
                </Col>
                <Col className="d-flex justify-content-end">
                  <button onClick={logout} className="logout-btn">Logout <FaPowerOff className="logout-icon" style={{cursor:"pointer", color:"red", fontSize:"30px"}}  /></button>
                </Col>
            </Row>
        </Container>
    )
}

export default UserHeader;
