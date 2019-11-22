import React, { Component } from 'react';
import './Header.scss';


export class Header extends Component {
    render() {
        return (
            <header className="header">
                {/* <img src="" alt="logo"/> */}
                <span className="header__page-title">CEOS</span>
                <div className="header__link-container">
                <span className="header__link linkone">Item 1</span>
                <span className="header__link linktwo">Item 2</span>
                </div>
            </header>
        )
    }
}

export default Header
