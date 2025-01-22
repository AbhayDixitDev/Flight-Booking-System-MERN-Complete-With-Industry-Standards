import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import axios from 'axios';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [passportNumber, setPassportNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('fullName', fullName);
    formData.append('avatar', avatar);
    formData.append('passportNumber', passportNumber);

    axios.post('http://localhost:8000/api/user/register', formData,{
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(res => {
        console.log(res.data);
        message.success(res.data.message);
        navigate('/');
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <header className="bg-dark text-white p-3 d-flex justify-content-center align-items-center" style={{ background: 'linear-gradient(to right, #000, #222)', fontFamily: 'FancyFont' }}>
        <h1 className="display-4 mr-3">Flight Booking App</h1>
        <FaEnvelope size={30} /> &nbsp; &nbsp;
        <FaLock size={30} />
      </header>
      <Container className="mt-5" style={{overflow:"scroll", height:"65vh",overflowX:"hidden", scrollbarWidth: "thin"}}>
        <Row className="justify-content-center">
          <Col md="4" className="d-flex align-items-center">
            <Form onSubmit={handleSubmit} className="shadow-lg p-5 mb-5 w-100 bg-white rounded m-auto">
              <h2 className="text-center mb-4">Register</h2>
              <FormGroup>
                <Label for="username" className="d-flex align-items-center">
                  <FaEnvelope className="mr-2" />
                  Username
                </Label>
                <Input
                  type="text"
                  id="username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  placeholder="Enter your username"
                />
              </FormGroup>

              <FormGroup>
                <Label for="email" className="d-flex align-items-center">
                  <FaEnvelope className="mr-2" />
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
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
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </FormGroup>

              <FormGroup>
                <Label for="fullName" className="d-flex align-items-center">
                  <FaEnvelope className="mr-2" />
                  Full Name
                </Label>
                <Input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                />
              </FormGroup>

              <FormGroup>
                <Label for="avatar" className="d-flex align-items-center">
                  <FaEnvelope className="mr-2" />
                  Avatar
                </Label>
                <Input
                  type="file"
                  id="avatar"
                  onChange={e => setAvatar(e.target.files[0])}
                />
              </FormGroup>

              <FormGroup>
                <Label for="passportNumber" className="d-flex align-items-center">
                  <FaEnvelope className="mr-2" />
                  Passport Number
                </Label>
                <Input
                  type="text"
                  id="passportNumber"
                  value={passportNumber}
                  onChange={e => setPassportNumber(e.target.value)}
                  placeholder="Enter your passport number"
                />
              </FormGroup>

              <Button color="danger" block className="my-2">
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <footer className="bg-dark text-white p-3 text-center" style={{ marginTop: 'auto' }}>
        <p>&copy; 2025 Abhay Dixit</p>
      </footer>
    </div>
  )
}

export default Registration