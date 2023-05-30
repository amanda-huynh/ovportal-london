import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import SmallLogo from '../assets/logo-small.png';

const Navbar = () => {
    return (
        <div className="navbar">
            {/* <div>
                <img src={SmallLogo} alt='Small Logo' />
            </div> */}

            {/* Navigation Bar */}
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/mapoverview'>Map Overview</Link>
                </li>
                <li>
                    <Link to='/mapoverviewinformational'>Map Overview Informational</Link>
                </li>
            </ul>
        </div>
    )
};

export default Navbar;