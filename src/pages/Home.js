import React from 'react';

import HomeData from '../components/HomeData';

import HomeImage from '../components/HomeImage';

import SocialList from '../components/SocialList';

const Home = () => {
    return(
        <>
            <section className="home section">

                <div className="home__container container grid">

                    <div className="home__content grid">
                    
                        <SocialList />

                        <HomeImage />

                        <HomeData />
                    
                    </div>

                    <div className="home__scroll">
                        
                        <a href="#about" className="home__scroll-button button--flex">
                        
                            <span className="home__scroll-name"> Scroll down</span>
                        
                            <i className="fas fa-angle-down home__scroll-arrow"></i>
                        
                        </a>
                    
                    </div>

                </div>

            </section>
        </>
    )

}

export default Home;