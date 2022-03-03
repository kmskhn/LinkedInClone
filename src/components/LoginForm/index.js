import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import userSlice, { login } from '../../features/userSlice';
import { auth } from '../../firebase';
import classes from './index.module.scss';

const LoginForm = () => {
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();


    const nameHandler = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const emailHandler = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const passwordHandler = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const loginHandler = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL,
            }))
        }).catch((e) => alert(e));
        
    }

    const register = () => {
        console.log('REGISTER');
        if (!name) {
            return alert('Please Enter a Name')
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoUrl: profilePic
                        }))
                    })
            })
            .catch((e) => alert(e))

    }

    return (
        <div className={classes.login}>
            <img src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png" alt="linkedin logo" />
            <form onSubmit={loginHandler} className={classes.login__Form}>
                <input
                    type='text'
                    name='Fullname'
                    placeholder='Full name (required if registering)'
                    value={name}
                    onChange={nameHandler}
                />
                <input
                    type='text'
                    name='profilePic'
                    placeholder='Profile pic URL (optional)'
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                />
                <input
                    type='email'
                    name='email'
                    placeholder='Enter your Email'
                    value={email}
                    onChange={emailHandler}
                />
                <input
                    type='password'
                    name='password'
                    placeholder='Enter your password'
                    value={password}
                    onChange={passwordHandler}
                />
                <button>Sign in</button>
            </form>
            <p>Not a member?{" "}<span onClick={register} className={classes.login__Register}>Register Now.</span></p>
        </div>

    )
}

export default LoginForm