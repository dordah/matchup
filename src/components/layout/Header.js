import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header style={headerStyle}>
            <img alt='ronaldo' src='./images/header/cristiano.png' style={crisStyle} />
            <img alt='messi' src='./images/header/lionel.png' style={leoStyle} />
            <h1 style={matchUpStyle}>Match Up</h1>
            <hr style={{ width: '40%', margin: '8px auto' }} />
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '30px',
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    margin: '5px'
}

const crisStyle = {
    height: '100px',
    marginLeft: '10%',
    float: 'left'
}

const leoStyle = {
    height: '100px',
    marginRight: '10%',
    float: 'right'
}

const matchUpStyle = {
    margin: '8px',
    padding: '2px'
}

