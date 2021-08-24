import React  from 'react';

import ServiceTitle from './ServiceTitle';
import Icon from './Icon';
import SpanService from './SpanService';
import ModalService from './ModalService';

const Service = ({title, icon}) => {
    

    return (
        <>
            <div className="services__content">

                <div>

                    <Icon classStyle={"services__icon"} icon={icon} />

                    <ServiceTitle title={title} />

                </div>

                <SpanService
                    styleClass={"button button--flex button--small button--link services__button"}
                    text={"View more"}
                />

                <ModalService />

            </div>

            

            
        </>
    )
}

export default Service;