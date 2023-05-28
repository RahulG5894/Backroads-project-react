import React from 'react'
import Title from './Title'
import { tourDetails } from '../data'
import TourDetails from './TourDetails'

const Tours = () => {
    return (
        <section className="section" id="tours">
            <Title title="featured" subTitle="tours" />
            <div className="section-center featured-center">
                {
                    tourDetails.map((tour) => {
                        return <TourDetails key={tour.id} {...tour} />
                    })
                }
            </div>
        </section>
    )
}

export default Tours
