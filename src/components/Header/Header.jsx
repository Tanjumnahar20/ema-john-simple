/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Header = () => {
    const {user,logOut} = useContext(AuthContext);
  
    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link>
            {
                user&& <span><button className='log-out' onClick={handleLogOut}>Log out</button></span>
            }
            </div>
        </nav>
    );
};

export default Header;