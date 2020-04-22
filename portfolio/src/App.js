import React from 'react';
import './App.css';

/* Slideshow */
var slideIndex = 0;


const showSlides = () => {
  var slideshowImages;
  var slides = document.getElementsByClassName("slides");
  for (slideshowImages = 0; slideshowImages < slides.length; slideshowImages++) {
    slides[slideshowImages].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}


function App() {
  return (
    <div className="App">
      <div className="fixed-top">
        <header className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <ul className="social-network">
                  <li><a className="waves-effect waves-dark" href="/"><i class="fa fa-facebook"></i></a></li>
                  <li><a className="waves-effect waves-dark" href="/"><i class="fa fa-twitter"></i></a></li>
                  <li><a className="waves-effect waves-dark" href="/"><i class="fa fa-linkedin"></i></a></li>
                  <li><a className="waves-effect waves-dark" href="/"><i class="fa fa-pinterest"></i></a></li>
                  <li><a className="waves-effect waves-dark" href="/"><i class="fa fa-google-plus"></i></a></li>
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
                  <a className="nav-link" href="/">Home
              <span className="sr-only">(current)</span>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="/">About</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/">Fruits</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/">Sea food</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/">Vegetables</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/">Blog</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="slideshow-container">

        <div class="slides fade">
          <img src="/assets/img/img1.png" className="slideimages" />
          <div className="text">
            <i>Join some things</i>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat.</p>
          </div>
        </div>

        <div className="slides fade">
          <img src="assets/img/img2.png" className="slideimages" />
          <div className="text">
            <i>Play some things</i>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat.</p>
          </div>
        </div>

        <div className="slides fade">
          <img src="assets/img/img3.png" className="slideimages" />
          <div className="text">
            <i>Win some things</i>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App;
