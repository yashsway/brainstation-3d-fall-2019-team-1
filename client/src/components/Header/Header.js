import React, { Component } from 'react';
import './Header.scss';


export class Header extends Component {
    render() {
        return (
            <header className="header">
                {/* <img src="" alt="logo"/> */}
                <span className="header__page-title">Digital Futures</span>
                <div className="header__link-container">
                <span className="header__link linkone">About</span>
                <span className="header__link linktwo">Contact</span>
                </div>
            </header>
        )
    }
}

export default Header
