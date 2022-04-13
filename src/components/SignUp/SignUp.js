import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../images/google.png'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth)
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'


    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }
    if (user) {
        navigate(from, { replace: true })
    }
    const handleCreateUser = event => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError("Password didn't match")
            return
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer')
            return
        }
        
        createUserWithEmailAndPassword(email, password)
        setError('')
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
      }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm password" id="" required />
                    </div>
                    <p className='error'><small>{error}</small></p>
                    <input className='form-submit' type="submit" value="Sign up" />
                </form>
                <p>
                    Already have a account? <Link className='form-link' to="/login">Login</Link>
                </p>
                <div className='border-line'>
                    <div className='line'></div>
                    <p>or</p>
                    <div className='line'></div>
                </div>
                <button onClick={handleGoogleSignIn} className='btn-google'><img src={google} alt="" />Continue with Google</button>
            </div>
        </div>
    );
};

export default SignUp;