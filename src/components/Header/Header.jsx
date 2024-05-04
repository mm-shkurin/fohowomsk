import React from 'react';
import './header.css'
import logo from './../../img/Group 12.svg';
import map from './../../img/acetone-20231123-214954-947 1.png';
import YourMenuComponent from '../Burger/burger';
function Header() {

    return (
        <header className='header'>
            <div className="container">
                <div className="header_row">
                    <div className="header_logo">
                        <img src={logo} alt="Logo" />
                        <span>FOHOW</span>
                    </div>
                    <div className="header_map">
                        <img src={map} className="map" alt="map" />
                    </div>
                    <YourMenuComponent></YourMenuComponent>
                </div>
            </div>
        </header>
    )
}

export default Header;