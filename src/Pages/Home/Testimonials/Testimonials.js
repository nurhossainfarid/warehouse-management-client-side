import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const url = 'https://salty-beach-12197.herokuapp.com/comments';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setComments(data);
        })
    }, [])
    return (
        <div className='mx-5 mt-5'>
            <p className='text-center text-xl'>Testimonials</p>
            <h3 className='text-center mb-5'>What Our Customers Saying</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {
                comments.map(message => <Testimonial key={message._id} message={message}></Testimonial>).slice(0, 3)
            } 
            <Link to={'/t'}><button className='text-white px-3 py-1 bg-cyan-500 hover:bg-cyan-600 rounded text-center'>View All</button></Link>
            </div>
        </div>
    );
};

export default Testimonials;