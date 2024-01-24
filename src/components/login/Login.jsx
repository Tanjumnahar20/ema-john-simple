/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Login = () => {
    const {signIn}=useContext(AuthContext);
    // use hooks to go another page from login
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    const from = location.state?.from?.pathname || '/';

    const handleSignIn = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate(from,{replace:true});
        })
        .catch(error=>console.error(error))
    }

    return (
        <div className='form-container'>
            <h4 className='form-title'>Login</h4>
                <form onSubmit={handleSignIn} className='form' >
            <div className='form-controller'>
               <label htmlFor="email">Email</label>
               <input type="email" name='email' required />
            </div>
            <div className='form-controller'>
               <label htmlFor="password">Password</label>
               <input type="password" name='password' required />
            </div>
            <button className='btn-login'>login</button>
            <p><small>New to ema-john?<Link className='link' to='/signup'>create new account</Link></small></p>
                </form>
        </div>
    );
};

export default Login;