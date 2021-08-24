import React,{useState} from 'react';

import SkillData from './SkillData';

const Skill = ({title, subtitle, icon, tecno}) => {

    const [clicked, setClicked] = useState(false);

    const toggleClass = () => {
        
        setClicked(!clicked);
    
    };


    return(
        <>
            <div className={clicked ? "skill__content skills__open" : "skill__content skills__close"} onClick={toggleClass}>
                {/* header SKILL*/}

                <div className="skills__header">

                    <i className={`${icon} skills__icon`}></i>

                    <div>
                        <h1 className="skills__title">{title}</h1>
                        <span className="skills__subtitle">{subtitle}</span>
                    </div>

                    <i className="fas fa-angle-down skills__arrow"></i>

                </div>

                <div className="skills__list grid">

                    {
                        tecno.map( (item) => 
                            <SkillData 
                                key={item.id}
                                title={item.title}
                                percentage={item.percentage}
                                />
                        )
                    }
                    
                </div>

            </div>
        </>
    )
}

export default Skill;