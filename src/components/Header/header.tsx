import React from 'react';
import './style.css';
import Logo from './Logo';
import Navigation from './Navigation';
import Button from '../Button';

const Header = () => {
    return (
        <header className='header'>
            <Logo />
            <div className='headerLinks'>
                <Navigation />
                <Button onClick={() => { }} styles={{ marginLeft: '32px' }} feching={false}> Sign Up</Button>
            </div>
        </header>
    )
};

export default Header;