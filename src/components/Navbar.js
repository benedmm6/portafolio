import React, { useState } from 'react';

import { menu } from '../config/Menu'

import NavItem from './NavItem';


const Navbar = () => {

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    return (
        <>
            <header className="header" id="header">

                <nav className="nav container">

                    {/* LOGO */}
                    <a href="/" className="nav__logo">Edgar</a>

                    <div className={isActive ? 'nav__menu show-menu' : 'nav__menu'}>

                        <ul className="nav__list grid">

                            {
                                menu.map((item, index) =>

                                    <NavItem
                                        key={index}
                                        url={item.url}
                                        icon={item.icon}
                                        text={item.text}
                                        onClick={toggleClass}
                                    />

                                )
                            }

                        </ul>

                        <i className="fas fa-times nav__close" onClick={toggleClass}></i>

                    </div>

                    <div className="nav__btns">
                    
                        {/* <i className="far fa-moon" id="theme-button"></i> */}
                    
                        <div className="nav__toggle" onClick={toggleClass}>
                        
                            <i className="fas fa-th"></i>
                        
                        </div>
                    
                    </div>

                </nav>

            </header>
        </>
    )
}

export default Navbar;