import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Header = () => {
    return (
        <header>
            <div className="navbar navbar-expand-xl|lg|md|sm red">
                <div className="container">
                    <div className="navbar-header">
                        <Link to='/' className="navbar-brand e">e!</Link>
                    </div>
                    <ul className="nav">
                        <li className="nav-item">
                            <a href="#" className="text login">Log in</a>
                        </li>

                        <li className="nav-item text">
                            <a href="#" className="signup">Create an account</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;