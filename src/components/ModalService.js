import React from 'react';

import ModalTitle from './ModalTitle';
import Icon from './Icon';
import ModalGrid from './ModalGrid';

const ModalService = () => {

    return(
        <>
            <div className={"services__modal"}> 
                
                <div className="services__modal-content">

                    <ModalTitle title={"Web Designer"} />

                    <Icon classStyle={"services__modal-close"}  icon={"uil uil-times"}/>

                    <ModalGrid />
                </div>

            </div>
        </>
    )
}

export default ModalService;