import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { auth, provider } from '../features/firebase/firebase';
import { login } from '../features/userSlice';
import './Login.css';

const Login = () => {

    const dispatch = useDispatch(); 

    const signIn = async () => {
        const isUserSignin = async () => {
            try {
                let user = await auth.signInWithPopup(provider);
                return [user, null];
            } catch (error) {
                console.log(error);
                return [null, error];
            }
        };

        const [user, error] = await isUserSignin();
        if (!!error) {
            alert("Something went wrong. Please try again!");
            return false;
        }

        dispatch(login({
            displayName: user.user.displayName,
            email: user.user.email,
            photoUrl: user.user.photoURL
        }));

    }

    return (
        <div className='login'>
            <div className="login__container">
                <img
                    src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
                    alt="google main logo"
                />
                <Button
                    variant='contained'
                    color='primary'
                    onClick={() => signIn()}
                >
                    Login
                </Button>
            </div>
        </div>
    );
};

export default Login;