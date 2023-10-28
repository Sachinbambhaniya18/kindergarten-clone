import React from 'react'
import StaffFooter from '../teacher/StaffFooter'
import Heading from '../Heading'
import { articles } from '../../static-data/articleData'
import { Link } from 'react-router-dom'

const Article = () => {
    return (
        <div className='Article-wrapper'>
            <div className="Article-container">
                <Heading title="Interesting Articles Updated Daily" subtitle="Together We Can Create" styleValue={{ display: 'none' }} />
                <div className="Article-row">
                    {
                        articles.map((article) => (

                            <div className="Blog-wrapper">
                                <div className="Blog-card">
                                    <div className="Blog-img">
                                        <img src={article.src} alt="Article" />
                                    </div>
                                    <div className="Blog-content">
                                        <h5>
                                            <Link to='/'>
                                                {article.title}
                                            </Link>
                                        </h5>
                                        <p>{article.content}</p>
                                        <ul>
                                            <li>12 Comments</li>
                                            <li>|</li>
                                            <li>Dec 17, 2020</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="Article-row">
                    <StaffFooter />
                </div>
            </div>
        </div>
    )
}

export default Article