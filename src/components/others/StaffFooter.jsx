import React from 'react'
import { Link } from 'react-router-dom'
import {  CaretRight } from '../cards/class-structure/CardSvg'
const StaffFooter = () => {
  return (
    <div className='Staff-footer'>
        <div className="Staff-col">
            <div className="Staff-footer-container">
                <Link to="/" className='Qualification'>With 20+ Qualified Teacher? </Link>
                <Link to="/" className='View-btn'>
                    View All Here
                    <CaretRight />
                </Link>
                <Link to="/" className='Career-btn'>Careers</Link>
            </div>
        </div>
    </div>
  )
}

export default StaffFooter