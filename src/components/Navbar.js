import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = ({ logout, login, question }) => {
    return (
    <div className="navbar">
        <h5>NAVBAR</h5>

        <h1>Boxxxxx</h1>
        
        <Link to={"/"}>
            <button onClick={logout}>Log Out</button>
            <button onClick={login}>Login</button>
            <button onClick={question}>Questions</button>
        </Link>
    <hr />
    </div>
    );
}