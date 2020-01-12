import React from 'react';

import './index.css';
import { Link } from 'react-router-dom';

const HeaderLogin = () => (
    <Link to='/login' className="header-link">
        Login
    </Link>
);

const HeaderLogout = ({ logout }) => (
    <a href="#" onClick={(e) => logout(e)} className="header-link">
        Log Out
    </a>
);

const Header = ({ authenticated, requestLogoutUser }) => {

    const handleLogout = (e) => {
        e.preventDefault();
        requestLogoutUser();
    }

    return (
        <header className="header">
            {!authenticated ? <HeaderLogin /> : <HeaderLogout logout={handleLogout} />}
        </header>
    );
};

export default Header;