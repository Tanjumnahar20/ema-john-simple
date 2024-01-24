/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
const SignUp = () => {
    const {user,createUser} =useContext(AuthContext);

    const [error,setError] =useState('');
    const[weakError,setWeakError] =useState('')

    const handleSignIn=(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm)
        
        
        if(password !=confirm){
            setError('password did not match!');
            return
        }
        else if(password.length<8){
            setWeakError('password must be 8 character or more')
            return
        }
        
        createUser(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser,45)
        })
        .catch(error=>setError(error.message))
    }

    return (
        <div className='form-container'>
            <h4 className='form-title'>Sign up</h4>
                <form onSubmit={handleSignIn} className='form' >
            <div className='form-controller'>
               <label htmlFor="email">Email</label>
               <input type="email" name='email' required />
            </div>
            <div className='form-controller'>
               <label htmlFor="password">Password</label>
               <input type="password" name='password' required />
               <p><small>{weakError}</small></p>
            </div>
            <div className='form-controller'>
               <label htmlFor="password">Confirm password</label>
               <input type="password" name='confirm' required />
               <p>{error}</p>
            </div>
            <button className='btn-login'>Sign up</button>
            <p><small>Already have an account?<Link className='link' to='/login'>login</Link></small></p>
                </form>
        </div>
    );
};

export default SignUp;