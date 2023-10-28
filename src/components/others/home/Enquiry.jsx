import React from 'react'
import { Link } from 'react-router-dom'
import { CaretRight } from '../../cards/class-structure/CardSvg'

const Enquiry = () => {
  return (
    <div className='Enquiry-wrapper'>
        <div className="Enquiry-container">
            <div className="Enquiry-row">
                <div className="Enquiry-content">
                    <h5 className="Enquiry-sub">Join Our New Session</h5>
                    <h2 className="Enquiry-title">Call To Enroll Your Child at +467 3376 482</h2>
                    <Link to="/">
                        Call Us Now
                        <CaretRight />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Enquiry