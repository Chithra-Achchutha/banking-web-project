import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Welcome to your Dashboard</h2>
          <div>
            <Button variant="primary" as={Link} to="/deposit">
              Deposit Money
            </Button>
          </div>
          <div>
            <Button variant="danger" as={Link} to="/withdraw">
              Withdraw Money
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
