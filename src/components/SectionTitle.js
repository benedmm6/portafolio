import React from 'react';

const SectionTitle = ({styleClass, text}) => {
    return(
        <>
            <h2 className={styleClass}>{text}</h2>
        </>
    )
}

export default SectionTitle;