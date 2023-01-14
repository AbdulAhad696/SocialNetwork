import React from "react"
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css"
const Header = () =>{
  return (
    <Navbar className="mainNav" expand="lg container-fluid">
      <div className="col-sm-6 col-8">
        <Link to="/" className="link d-flex align-items-center">
          <img className="logo" alt="React" src="../cheezein.png" />
          <p className="headerName m-0 fw-bold" >The Social Network</p>
        </Link>
      </div>
      {/* <div className=""></div> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <div className="col-sm-6 container-fluid d-flex justify-content-end">
        <Navbar.Collapse className="justify-content-end flex" id="basic-navbar-nav">
          <div className="">
            <Nav className="me-auto">
              <div className="navbar-nav">
                <Link className="link p-1 nav-link"  to="/signup">
                  <Button className="nav-item m-1" color="inherit" variant="outlined">Sign Up</Button>
                </Link>
                <Link className="link p-1 nav-link" to="/signin">
                  <Button className="nav-item m-1" color="inherit" variant="outlined">Sign In</Button>
                </Link>
              </div>
            </Nav>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
export default Header;