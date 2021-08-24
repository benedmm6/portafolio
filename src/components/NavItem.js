import React from 'react';

const NavItem = ({url, icon, text,onClick}) => {

    return(
        <>
            <li className="nav__item">
                <a className="nav__link" href={url} onClick={onClick}>
                    <i className={icon}></i> {text}
                </a>
            </li>
        </>
    )

}

export default NavItem;