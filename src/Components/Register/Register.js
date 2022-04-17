import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import GoogleSign from '../GoogleSign/GoogleSign';

const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);

    if (user) {
        navigate('/')
    }
    const HandleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await await updateProfile({ displayName: name });

    }
    return (
        <div>
            <div className='container mx-auto w-50 mb-5'>
                <h1 className='text-success mb-3'>Register</h1>
                <form action="" className='form ' onSubmit={HandleRegister}>

                    <input className='mb-3' type="text" name="name" placeholder='Your Name' id="" />
                    <input className='mb-3' type="email" name="email" placeholder='Enter Email' id="" />
                    <input className='mb-3' type="password" name="password" placeholder='Enter Password' id="" />
                    <input className='btn btn-success' type="submit" value="Register" />

                    <p className='text-danger'>{error?.message}</p>
                </form>
                <GoogleSign></GoogleSign>
            </div>

        </div>
    );
};

export default Register;