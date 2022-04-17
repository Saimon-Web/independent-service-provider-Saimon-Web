import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import GoogleSign from '../GoogleSign/GoogleSign';
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
        auth
    );

    if (user) {
        navigate(from, { replace: true });
    }
    const HandleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password)
        console.log(email, password)
    }
    const emailRef = useRef('');
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email')
        }

    }
    return (
        <div className='container mx-auto w-50 mb-5'>
            <h1 className='text-success mb-3'>Login</h1>
            <form action="" className='form ' onSubmit={HandleLogin}>

                <input className='mb-3' type="email" name="email" placeholder='Enter Email' id="" />
                <input className='mb-3' type="password" name="password" placeholder='Enter Password' id="" />
                <input className='btn btn-success' type="submit" value="Login" />
                <p className='text-danger'>{error?.message} || {error1?.message}</p>

            </form>
            <GoogleSign></GoogleSign>
            <p className='mt-5'>Forget Password? <span className='text-primary' onClick={resetPassword}>Reset Password</span></p>

        </div>
    );
};

export default Login;