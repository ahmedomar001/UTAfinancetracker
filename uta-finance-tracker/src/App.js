import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/scholarships">Scholarships</Link> | 
          <Link to="/discounts">Discounts</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/discounts" element={<Discounts />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home Page</h2>;
}

function Scholarships() {
  return <h2>Scholarship Page</h2>;
}

function Discounts() {
  return <h2>Discount Page</h2>;
}

export default App;
