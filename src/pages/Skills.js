import React from 'react';

import SectionTitle from '../components/SectionTitle';

import SectionSubtitle from '../components/SectionSubtitle';

import Skill from '../components/Skill';

import {skills} from '../config/Skill';

const Skills = () => {
    return(
        <>
            <section className="skills section" id="skills">
           
                <SectionTitle styleClass={"section__title"} text={"Skills"} />

                <SectionSubtitle styleClass={"section__subtitle"} text={"My technical level"}/>

                <div className="skills__container container grid">

                    <div>
                        {
                            skills.map( (item) => 
                                <Skill 
                                    key={item.id} 
                                    title={item.title} 
                                    subtitle={item.subtitle} 
                                    icon={item.icon} 
                                    tecno={item.tecno}
                                />)
                        }

                    </div>  

                </div>
           
           </section>
        </>
    )
}

export default Skills;