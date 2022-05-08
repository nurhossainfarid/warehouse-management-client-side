import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import './Registration.css';


const Registration = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        error,
        loading
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    
    if (user) {
        navigate('/home');
    }

    if (loading) {
        return <Loading></Loading>
    }

    function handleSubmit(event) {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="tel" placeholder="Your phone number" />
                </Form.Group>

                {/* show error add loading message */}
                <p className='text-xl text-red-600'>{error?.message}</p>
                <p className='text-xl text-red-600'>{loading?.message}</p>

                <Button variant="primary" type="submit">
                    Registration
                </Button>
                <p>If you have already an account, please <Link to={'/login'}><button className='text-xl text-red-500'>Login Now.</button></Link></p>
            </Form>
        </div>
    );
};

export default Registration;<h1>This is registration page</h1>