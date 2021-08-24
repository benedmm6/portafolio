import React from 'react';
import Icon from './Icon';

const ModalGridItem = ({text}) => {
    return(
        <li className="services__modal-service">

            <Icon classStyle={"services__modal-icon"}  icon={"uil uil-check-circle"} />
            
            <p>{text}</p>

        </li>
    )
}

export default ModalGridItem;