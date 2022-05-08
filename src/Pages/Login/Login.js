import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    // use navigate
    const navigate = useNavigate();
    // use location
    const location = useLocation();

    // password reset
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
      );

    const from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        error,
        loading
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle] = useSignInWithGoogle(auth);

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, {replace: true});
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
        signInWithGoogle(email, password);
    }

    const passwordReset = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }
    return (
        <div>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" name='email' placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" name='password' placeholder="Password" required />
                </Form.Group>

                {/* show error add loading message */}
                <p className='text-xl text-red-600'>{error?.message}</p>
                <p className='text-xl text-red-600'>{loading?.message}</p>
                    
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p>If you are new user, please <Link to={'/registration'}><button className='text-xl text-red-500'>Registration Now.</button></Link></p>
                <button className='bg-cyan-500 hover:bg-cyan-600 text-white hover:text-gray-300 py-1 px-3 rounded' onClick={passwordReset}>Password Reset</button> <br /> <br />
                <button onClick={() => signInWithGoogle()} className='p-2 text-white bg-cyan-500 text-2xl rounded'>   Login With Google</button>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default Login;