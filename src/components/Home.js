import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // Replace useHistory with useNavigate

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();  // useNavigate hook instead of useHistory

  const handleSwitch = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    navigate('/dashboard');  // Use navigate to redirect
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration logic here
    navigate('/dashboard');  // Use navigate to redirect
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>{isLogin ? 'Login' : 'Register'}</h2>
          <Form onSubmit={isLogin ? handleLogin : handleRegister}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              {isLogin ? 'Login' : 'Register'}
            </Button>
          </Form>
          <Button variant="link" onClick={handleSwitch}>
            {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
