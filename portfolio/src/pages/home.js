import React from 'react';
import { Fade } from 'react-slideshow-image';
import HomeCarousel from '../components/homecarousel'

const fadeImages = [
    './assets/img/img1.png',
    './assets/img/img2.png',
    './assets/img/img3.png'
];

const fadeProperties = {
    duration: 8000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    onChange: (oldIndex, newIndex) => {
        console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    }
}

const Home = () => {
    return (
        <div className="slide-container">
            <Fade {...fadeProperties}>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[0]} />
                        <div className="text">
                            <h2>Join some things</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>

                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[1]} />
                        <div className="text">
                            <h2>Play some things</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
                <div className="each-fade">
                    <div className="image-container">
                        <img src={fadeImages[2]} />
                        <div className="text">
                            <h2>Win some things</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </Fade>
            <HomeCarousel />
        </div>
    )
}

export default Home