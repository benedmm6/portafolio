import React from 'react';
import Icon from './Icon';

const SpanService = ({styleClass, text, setState,show}) => {
    return(
        <>
            <span className={styleClass} onClick={() => setState(!show)}>
                
                {text} <Icon classStyle={"uil uil-arrow-right"} icon={"button__icon"} />
            
            </span>
        </>
    )
}

export default SpanService;