import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './GoogleSign.css'
const GoogleSign = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
    let errorElement;
    if (error) {
        errorElement = <p>{error?.message}</p>
    }
    if (user) {
        navigate('/')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='line bg-success w-50 '></div>
                <p className='mt-2 '>or</p>
                <div className='line bg-success w-50 '></div>
            </div>
            <button className='btn btn-success' onClick={() => signInWithGoogle()}>Continue with Google</button>
            <p className='text-danger'>{errorElement}</p>
        </div>
    );
};

export default GoogleSign;