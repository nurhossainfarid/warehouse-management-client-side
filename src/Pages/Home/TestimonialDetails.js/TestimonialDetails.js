import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TestimonialDetails = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const url = 'https://salty-beach-12197.herokuapp.com/comments';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setComments(data);
            })
    }, []);
    return (
        <div className='px-5 py-4 mt-5 d-grid md:grid-cols-3 gap-5'>
            {
                comments.map(comment => <>
                    <Card className=''>
                        <Card.Img className='px-4 py-1 card-img w-75' variant="top" src={comment.img} />
                        <Card.Body>
                                <Card.Title className='text-xl'>Name : {comment.name}</Card.Title>
                                <Card.Text className='mb-0'>Ratting : {comment.ratting}</Card.Text>
                                <Card.Text>
                                    Comment : {comment.comment}
                                </Card.Text>
                                <Link to={'/profileVisit'}>
                                <button className='bg-cyan-500 hover:bg-cyan-600 px-3 py-1 rounded text-white'>Visit Profile</button>
                                </Link>
                        </Card.Body>
                    </Card>
                </>)
            }
        </div>
    );
};

export default TestimonialDetails;