import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="fixed-top">
  <header className="topbar">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <ul className="social-network">
              <li><a className="waves-effect waves-dark" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a className="waves-effect waves-dark" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a className="waves-effect waves-dark" href="#"><i class="fa fa-linkedin"></i></a></li>
              <li><a className="waves-effect waves-dark" href="#"><i class="fa fa-pinterest"></i></a></li>
              <li><a className="waves-effect waves-dark" href="#"><i class="fa fa-google-plus"></i></a></li>
            </ul>
          </div>

        </div>
      </div>
  </header>
  <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
    <div className="container">
      <a className="navbar-brand" href="index.html" id="navbartext">Benjamin Brownlow</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">

        <ul className="navbar-nav ml-auto">

          <li className="nav-item active">
            <a className="nav-link" href="#">Home
              <span className="sr-only">(current)</span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>

         <li className="nav-item">
            <a className="nav-link" href="#">Fruits</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Sea food</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Vegetables</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Blog</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
    </div>
  );
}

export default App;
