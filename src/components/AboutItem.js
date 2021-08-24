import React from 'react';

const AboutItem = ({title, text}) => {
    return (
        <>
            <div>
                
                <span className="about__info-title">{title}</span>
                
                <span className="about__info-name">
                    {text}
                </span>
                
            </div>
        </>
    )
}

export default AboutItem;