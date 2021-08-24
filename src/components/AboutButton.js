import React from 'react';

import cv from '../assets/pdf/edgar_cv.pdf';

const AboutButton = () => {
    return(
        <>

            <div className="about__buttons">
            
                <a download="" className="button button--flex" href={cv}>
                    
                    Download CV<i className="fas fa-file-download button__icon"></i>
            
                </a>
            
            </div>
        </>
    )
}

export default AboutButton;