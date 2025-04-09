import React from 'react';
import './Fairneft.css';

function Fairneft() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="navbar-brand">FairNeft</div>
          <ul className="navbar-menu">
            <li className="navbar-item">Home</li>
            <li className="navbar-item">About Us</li>
            <li className="navbar-item">Products</li> 
            <li className="navbar-item">Contact</li>
            <li className="navbar-item">FAQ</li>
            <li className="navbar-item">CIBIL Score</li>
            <li className="navbar-item">Loan Eligibility</li>
          </ul>
          <ul className="navbar-menu">
            <li className="navbar-item">Login</li>
          </ul>
          <div className="navbar-buttons">
           <button className="register-button">Register</button>
          </div>
        </nav>
      </header>
      <div classname="financial-info-container"></div>
      <div classname="text-container"></div>
      <h1 classname="heading">Empower Your Financial Future</h1>
      <div classname="paragraph"></div>
      <p>At FairNeft, we believe that financial security should be accessible,
         hassle-free, and tailored to your needs. Whether you're looking for a 
         quick loan, a high-return investment plan, or comprehensive insurance
         coverage, we are here to provide you with the best financial solutions.</p>
      <p>With a team of seasoned financial experts, cutting-edge technology, and a
        customer-first approach, we have helped thousands of individuals and
        businesses achieve financial freedom and secure their future.</p>
    
      <div className="features-container">
        <ul>
          <li>Wide Range of Financial Products</li>
          <li>Personalized Recommendations</li>
          <li>Quick, Hassle-Free Approvals</li>
        </ul>
      </div>
    </div>
  );
}

export default Fairneft;