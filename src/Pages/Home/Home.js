import React from 'react';
import './Home.css'
import Inventory from './Inventory/Inventory';
import ControlledCarousel from './Slider/ControlledCarousel';

const Home = () => {
    return (
        <div>
            <ControlledCarousel></ControlledCarousel>
            <Inventory></Inventory>
        </div>
    );
};

export default Home;