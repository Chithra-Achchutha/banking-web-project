import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Deposit = ({ setBalance, setTransactions }) => {
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleDeposit = (e) => {
    e.preventDefault();
    if (amount > 0) {
      const depositAmount = parseFloat(amount);
      setBalance((prevBalance) => prevBalance + depositAmount); // Update balance

      // Add deposit transaction to the history
      const transaction = {
        id: Date.now(),  // Unique ID for the transaction
        type: 'Deposit',
        amount: depositAmount,
        date: new Date().toLocaleDateString(),
      };
      setTransactions((prevTransactions) => [...prevTransactions, transaction]); // Update transaction history

      navigate('/history'); // Redirect to the transaction history page
    } else {
      alert('Please enter a valid amount.');
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h2>Deposit Money</h2>
          <Form onSubmit={handleDeposit}>
            <Form.Group controlId="formBasicAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter amount to deposit"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Deposit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Deposit;
