import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css";
function Header(){
  return (
    <>
      <header className="main-header">
        <div>
            <img src="https://fairneft.com/Images/logo.svg"  alt="FairNeft"/>
        </div>
        <div className="nav-links">
            <Link to={"/"}>Home</Link>
            <Link to={"/About Us"}>About Us</Link>
            <Link to={"/Products"}>Products</Link>
            <Link to={"/Contact"}>Contact</Link>
            <Link to={"/FAQ"}>FAQ</Link>
            <Link to={"/CIBIL Score"}>CIBIL Score</Link>
            <Link to={"/Loan Eligibility"}>Loan Eligibility</Link>
        </div>
        <div>
            <button className="login">Login</button>
            <button className="register">Register</button>

        </div>
      </header>
    </>
  )
}  
export default Header;