import React from 'react'
import Title from './Title'
import ServiceDetails from './ServiceDetails'
import { services } from '../data'

const Services = () => {
    return (
        <section className="section services" id="services">
            <Title title="Our" subTitle="Services" />
            <div className="section-center services-center">
                {
                    services.map((service) => {
                        return <ServiceDetails key={service.id} {...service} />
                    })
                }
            </div>
        </section>
    )
}

export default Services
