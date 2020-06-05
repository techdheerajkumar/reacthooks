import React, { useState, useEffect } from 'react';
import NavItem from '../Atoms/NavItemComponent';

const HeaderComponent = () => {
    return (
        <header className="header">
            <div className="container-fluid">
                <ul>
                    <li><NavItem destination="/" page="Home" /></li>
                    <li><NavItem destination="/about" page="About" /></li>
                    <li><NavItem destination="/contact" page="Contact" /></li>
                    <li><NavItem destination="/movies" page="Movies" /></li>
                </ul>
            </div>
        </header>
    )
}
export default HeaderComponent