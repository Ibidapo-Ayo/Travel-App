import React from 'react'
import NavBar from './NavBar';
import Banner from './Banner';
import Slider from './Slider';
import "../../src/index.css";
import "./styles/style.css";

function Main() {
    return (
        <div>
            <NavBar />
            <Banner />
            <Slider />
        </div>
    )
}

export default Main
