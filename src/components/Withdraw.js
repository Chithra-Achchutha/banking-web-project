import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Withdraw = ({ setBalance, setTransactions }) => {
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleWithdraw = (e) => {
    e.preventDefault();
    if (amount > 0) {
      const withdrawAmount = parseFloat(amount);
      setBalance((prevBalance) => prevBalance - withdrawAmount); // Update balance

      // Add withdrawal transaction to the history
      const transaction = {
        id: Date.now(),  // Unique ID for the transaction
        type: 'Withdraw',
        amount: withdrawAmount,
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
          <h2>Withdraw Money</h2>
          <Form onSubmit={handleWithdraw}>
            <Form.Group controlId="formBasicAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter amount to withdraw"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Withdraw
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Withdraw;
