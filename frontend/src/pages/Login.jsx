import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaLock, FaUserPlus } from 'react-icons/fa';
import { message } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:8000/api/user/login', { email, password },{withCredentials: true});
            const data = response.data;
            if (data.success) {
                message.success(data.message);
            } else {
                message.error(data.message);
            }
        } catch (error) {
            message.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-zinc-900" style={{ height: '100vh' }}>
            <Col md={4} className="bg-light p-4 rounded shadow ">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="email" className="mb-3">
                        <Form.Label>
                            <FaEnvelope className="mr-2" />
                            Email
                        </Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="password" className="mb-3">
                        <Form.Label>
                            <FaLock className="mr-2" />
                            Password
                        </Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="text-center mt-3">
                        <p className="d-flex justify-content-between align-items-center text-muted mb-0">
                        <Button variant="primary" type="submit" block disabled={loading} className="mb-2">
                            {loading ? 'Logging in...' : 'Login'}
                        </Button>
                       <div className="d-flex align-items-center">
                       Not registered? <Button as={Link} to="/register"  className="px-2"><FaUserPlus className='d-inline mr-2'  />Register</Button>
                       </div>
                        </p>

                    </Form.Group>
                </Form>
            </Col>
        </div>
    );
};

export default Login;
