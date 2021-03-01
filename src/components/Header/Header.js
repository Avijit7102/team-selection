import React from 'react';

import './Header.css'
import Player from './Player/Player';
const Header = () => {
    return (
        <div className="header">
            <h1 className="header-h1">Player Selection Page:</h1>
            <Player></Player>
        </div>
    );
};

export default Header;