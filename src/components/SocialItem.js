import React from 'react';

const SocialItem = ({url, icon}) => {
    return(
        <>
            <a href={url} target="__blank" className="home__social-icon" >
                <i className={icon}></i>
            </a>
        </>
    )
}

export default SocialItem;