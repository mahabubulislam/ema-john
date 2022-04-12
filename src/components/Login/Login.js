import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import google from '../../images/google.png'
const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required/>
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to Ema-John? <Link className='form-link' to="/signup">Create an account</Link>
                </p>
                <div className='border-line'>
                    <div className='line'></div>
                    <p>or</p>
                    <div className='line'></div>
                </div>
                <button className='btn-google'><img src={google} alt="" />Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;