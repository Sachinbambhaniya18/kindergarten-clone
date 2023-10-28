import React from 'react'
import Heading from '../Heading'
import { heading } from '../../static-data/heading-data'

const ClassVariety = () => {
    const gridCards = [
        {
            img: '/assets/images/teacher-grid/kid1.png',
            title: 'Pre-School Classes'
        },
        {
            img: '/assets/images/teacher-grid/kid2.png',
            title: 'Best Teachers'
        },
        {
            img: '/assets/images/teacher-grid/kid1.png',
            title: 'Excellent Courses'
        },
        {
            img: '/assets/images/teacher-grid/kid2.png',
            title: 'Funny Games'
        },
    ]
    return (
        <div className='Teacher-grid-wrapper'>
            <div className="Teacher-grid-container">
                <Heading subtitle={heading[3].subtitle} title={heading[3].title} content={heading[3].content}/>
                <div className="Teacher-grid-row">
                    {
                        gridCards.map((card) => (
                            <div className="Teacher-grid-col">
                                <div className="Teacher-grid-img">
                                    <img src={card.img} alt="Child" />
                                    <h4>{card.title}</h4>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default ClassVariety