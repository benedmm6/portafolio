import React from 'react';

import img from '../assets/img/portafolio.svg';
import AboutButton from '../components/AboutButton';
// import AboutInfo from '../components/AboutInfo';
import SectionTitle from '../components/SectionTitle';
import SectionSubtitle from '../components/SectionSubtitle';



const About = () => {
    return(
        <>
            <section className="about section">
                
                <SectionTitle styleClass={"section__title"} text={"About Me"} />

                <SectionSubtitle styleClass={"section__subtitle"} text={"My introduction"}/>

                <div className="about__container container grid">

                    <img src={img} className="about__img" alt="pic" />

                    <div className="about__data">

                        <p className="about__description">
                            Hi, I'm Edgar Méndez based in México. I'm Web Developer, 
                            with extensive knowledge in web technologies.
                        </p>

                        {/* <AboutInfo /> */}

                        
                        <AboutButton />

                    </div>
                
                </div>           
            
            </section>
        </>
    )
}

export default About;