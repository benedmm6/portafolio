import React from 'react';

const Icon = ({classStyle, icon}) => {
    
    const content = `${classStyle} ${icon}`;
    
    return(
        <>
            <i className={content}></i>
        </>
    )
}

export default Icon;