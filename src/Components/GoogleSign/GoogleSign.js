import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const GoogleSign = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (user) {
        navigate('/')
    }
    return (
        <div>
            <button onClick={() => signInWithGoogle()}>Continue with Google</button>
        </div>
    );
};

export default GoogleSign;