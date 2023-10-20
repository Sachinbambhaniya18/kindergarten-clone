import React from 'react'
import { heading } from '../../static-data/heading-data'
import Heading from '../Heading'
import StaffCard from './StaffCard'
import StaffFooter from '../StaffFooter'


const Staff = () => {
    return (
        <div className='Teacher-wrapper'>
            <div className="Teacher-container">
                <Heading title={heading[1].title} subtitle={heading[1].subtitle} content={heading[1].content} />
                <div className="Teacher-grid">
                 <StaffCard />
                </div>
                <StaffFooter />
            </div>
        </div>
    )
}

export default Staff