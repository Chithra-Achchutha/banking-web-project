import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar'; // Import Navbar component
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import History from './components/History';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';

const App = () => {
  const [balance, setBalance] = useState(0); // Start with 0 balance (no default deposit)
  const [transactions, setTransactions] = useState([]); // Start with an empty transaction history

  return (
    <Router>
      <NavBar /> {/* Add the Navbar at the top */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/history" element={<History balance={balance} transactions={transactions} />} />
        <Route
          path="/deposit"
          element={<Deposit setBalance={setBalance} setTransactions={setTransactions} />}
        />
        <Route
          path="/withdraw"
          element={<Withdraw setBalance={setBalance} setTransactions={setTransactions} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
