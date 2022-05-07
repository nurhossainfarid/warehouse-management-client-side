import React from 'react';
import AddComment from './AddComment/AddComment';
import './Home.css'
import Inventory from './Inventory/Inventory';
import ControlledCarousel from './Slider/ControlledCarousel';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <ControlledCarousel></ControlledCarousel>
            <Inventory></Inventory>
            <Testimonials></Testimonials>
            <AddComment></AddComment>
        </div>
    );
};

export default Home;