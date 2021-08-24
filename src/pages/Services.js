import React from 'react';

import SectionTitle from '../components/SectionTitle';
import SectionSubtitle from '../components/SectionSubtitle';
import Service from '../components/Service';
import {services} from '../config/Services';

const Services = () => {
    return (
        <>
            <section className="services section">

                <SectionTitle styleClass={"section__title"} text={"Services"} />

                <SectionSubtitle styleClass={"section__subtitle"} text={"What i offer"} />

                <div className="services__container container grid">

                    {
                        services.map( (item, index) => (<Service key={item.id} data={item.description} title={item.title} icon={item.icon}/>) )
                    }        

                </div>

            </section>
        </>
    );
}

export default Services;