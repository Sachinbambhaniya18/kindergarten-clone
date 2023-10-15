import React from 'react'
import { CaretRight } from './cards/CardSvg'
import { Link } from 'react-router-dom'
import { ArrowRight } from './cards/CardSvg'
export const Button = ({ title }) => {
    return (
        <div className="Btn-row">
            <div className="Btn-col">
                <div className="Name"><Link to="/">{title} <CaretRight /></Link></div>
            </div>
        </div>
    )
}

export const ReadMore = ({ title }) => {
    return (
        <div className="Enroll-btn">
            <Link href="/">
                {title}
                <ArrowRight />
            </Link>
        </div>
    )
}