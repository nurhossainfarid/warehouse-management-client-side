import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Testimonial.css'

const Testimonial = ({ message }) => {
    const { name, img, ratting, comment } = message;
    return (
        <div>
            <Card className=''>
            <Card.Img className='px-4 py-1 card-img' variant="top" src={img} />
            <Card.Body>
                    <Card.Title className='text-xl'>Name : {name}</Card.Title>
                    <Card.Text className='mb-0'>Ratting : {ratting}</Card.Text>
                    <Card.Text>
                        Comment : {comment}
                    </Card.Text>
                    <Link to={'/profileVisit'}>
                    <button className='bg-cyan-500 hover:bg-cyan-600 px-3 py-1 rounded text-white'>Visit Profile</button>
                    </Link>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Testimonial;