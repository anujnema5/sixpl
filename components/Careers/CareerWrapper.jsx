import React from 'react'
import CareerBanner from './CareerBanner'
import Jobs from './Jobs'
import FormWrapper from './FormWrapper'

function CareerWrapper({ children, title, formTitle }) {
    return (
        <React.Fragment>
            <CareerBanner title={title} />
            <Jobs />
            <FormWrapper formTitle={formTitle}>{children}</FormWrapper>
        </React.Fragment>
    )
}

export default CareerWrapper