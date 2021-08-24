import React from 'react';

const SectionSubtitle = ({styleClass, text}) => {
    return(
        <>
            <span className={styleClass}>{text}</span>
        </>
    )
}

export default SectionSubtitle;