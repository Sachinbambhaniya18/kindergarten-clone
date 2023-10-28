import React from 'react'

const Counter = () => {
    const counter = [
        {
            count: 870,
            title: 'Teaching Hours'
        },
        {
            count: 400,
            title: 'Trips per year'
        },
        {
            count: 454,
            title: 'Awards'
        },
        {
            count: 852,
            title: 'Lessons'
        }
    ]
    return (
        <div className='Counter-wrapper'>
            <div className="Counter-main-container">
                <div className="Counter-container">
                    <div className="Counter-row">
                        {
                            counter.map((count) => (
                                <div className="Counter-col">
                                    <div className="Counter">
                                        <h2>{count.count}</h2>
                                        <span>{count.title}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Counter