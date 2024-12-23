import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

const History = ({ balance, transactions }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Transaction History</h2>
          <h4>Current Balance: ${balance}</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Transaction Type</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.type}</td>
                  <td>${transaction.amount}</td>
                  <td>{transaction.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default History;
