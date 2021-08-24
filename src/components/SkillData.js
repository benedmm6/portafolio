import React from 'react';

const SkillData = ({title, percentage}) => {
    return(
        <>

            <div className="skills__data">
                
                <div className="skills__titles">
                    <h3 className="skills__name">{title}</h3>
                    <span className="skills__number">{percentage}</span>
                </div>
                
                <div className="skills__bar">
                    <span className="skills__percentage" style={{ width: percentage }}></span>
                </div>
            
            </div>
        </>
    )
}

export default SkillData;