import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FaEnvelope, FaLock } from 'react-icons/fa';
// import Darkmode from 'darkmode-js';
import { bottom } from '@popperjs/core';
import axios from 'axios';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isUser, setIsUser] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const userType = localStorage.getItem("userType");
        if (userType === "user") {
            navigate("/user");
        } else if (userType === "admin") {
            navigate("/admin");
        }
    }, [navigate]);


    const handleToggle = () => setIsUser(prevState => !prevState);

    const emailPlaceholder = isUser ? 'Enter your email' : 'Enter your admin email';
    const passwordPlaceholder = isUser ? 'Enter your password' : 'Enter your admin password';
    const buttonText = isUser ? 'Login as User' : 'Login as Admin';


      

    const userLogin = (email, password) => {
        const api="http://localhost:8000/api/user/login"
        axios.post(api,{email,password})
        .then(res=>{
            message.success(res.data.message)
            localStorage.setItem("userType","user")
            window.location.href="/user"
        })
        .catch(err=>{
            message.error(err.response.data.message)
        })
    };

    const adminLogin = (email, password) => {
        const api="http://localhost:8000/api/user/adminLogin"
        axios.post(api,{email,password})
        .then(res=>{
            message.success(res.data.message)
            localStorage.setItem("userType","admin")
            window.location.href="/admin"

        })
        .catch(err=>{
            message.error(err.response.data.message)
        })
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <header className="bg-dark text-white p-3 d-flex justify-content-center align-items-center" style={{ background: 'linear-gradient(to right, #000, #222)', fontFamily: 'FancyFont' }}>
                <h1 className="display-4 mr-3">Flight Booking App</h1>
                <FaEnvelope size={30} /> &nbsp; &nbsp;
                <FaLock size={30} />
              
            </header>
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Col md="4" className="d-flex align-items-center">
                        <Form onSubmit={(e) => {
                            e.preventDefault();
                            if (isUser) {
                                userLogin(email, password);
                            } else {
                                adminLogin(email, password);
                            }
                        }} className="shadow-lg p-5 mb-5 w-100 bg-white rounded m-auto" >
                            <FormGroup>
                                <Label for="email" className="d-flex align-items-center">
                                    <FaEnvelope className="mr-2" />
                                    Email
                                </Label>
                                <Input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={emailPlaceholder}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="password" className="d-flex align-items-center">
                                    <FaLock className="mr-2" />
                                    Password
                                </Label>
                                <Input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder={passwordPlaceholder}
                                />
                            </FormGroup>
                            <Button color="dark" block className="my-2" onClick={handleToggle}>
                                {isUser ? 'Switch to Admin' : 'Switch to User'}
                            </Button>
                            
                            <Button color="danger" block className="mt-3" >
                                {buttonText}
                            </Button>
                            <Button color="dark" block className="mt-3" onClick={() => navigate("/register")}>
                            <span style={{color:"red"}}> Don't have an account? </span> Register
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <footer className="bg-dark text-white p-3 text-center" style={{ marginTop: 'auto' }}>
                <p>&copy; 2025 Abhay Dixit</p>
            </footer>
        </div>
    );
};

export default Login;