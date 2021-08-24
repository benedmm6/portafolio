import React from 'react';

const HomeData = () => {
    return(
        <>
            <div className="home__data">
                
                <h1 className="home__title">Hi, I'am Edgar</h1>
                
                <h3 className="home__subtitle">Web Developer</h3>
                
                {/* <p className="home__description">
                    High level experience in web design and development knowledge,
                    producing quality work.
                </p> */}
                <a href="/contact" className="button button--flex"> 
                    Contact me
                    <i className="fas fa-paper-plane button__icon"></i>
                </a>
                
            </div>
        </>
    )
}

export default HomeData;