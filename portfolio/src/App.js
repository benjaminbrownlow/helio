import React from 'react';
import './App.css';
import Home from './pages/home'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


function App() {
  return (
    <div>
      <div>
        <header className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <ul className="social-network">
                  <li><a className="waves-effect waves-dark" href="/"><i className="fa fa-facebook"></i></a></li>
                  <li><a className="waves-effect waves-dark" href="/"><i className="fa fa-twitter"></i></a></li>
                  <li><a className="waves-effect waves-dark" href="/"><i className="fa fa-linkedin"></i></a></li>
                  <li><a className="waves-effect waves-dark" href="/"><i className="fa fa-pinterest"></i></a></li>
                </ul>
              </div>

            </div>
          </div>
        </header>
        <div className="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
          <Navbar expand="lg" className="container">
            <Navbar.Brand href="/"> Benjamin Brownlow</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navbar-nav ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/">Portfolio</Nav.Link>
                <Nav.Link href="/">Blog</Nav.Link>
                <Nav.Link href="/">About</Nav.Link>
                <Nav.Link href="/">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
      <Home />
    </div >
  )
}

export default App;
