import React from 'react';
import AddComment from './AddComment/AddComment';
import Facilities from './Facilities/Facilities';
import './Home.css'
import Inventory from './Inventory/Inventory';
import ControlledCarousel from './Slider/ControlledCarousel';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <ControlledCarousel></ControlledCarousel>
            <Inventory></Inventory>
            <Facilities></Facilities>
            <Testimonials></Testimonials>
            <AddComment></AddComment>
        </div>
    );
};

export default Home;