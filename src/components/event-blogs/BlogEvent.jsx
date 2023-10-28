import React from 'react'
import Heading from '../others/Heading'
import { blogs } from './blogData';
import { Link } from 'react-router-dom';
const BlogEvent = () => {
    return (
        <div className='Blog-event-wrapper'>
            <div className="Blog-event-container">
                <Heading title="Interesting Articles Updated Daily" subtitle="Together We Can Create" styleValue={{ display: 'none' }} />
                <div className="Blog-event-row">
                    {
                        blogs.map((blog) => (

                            <div className="Blog-event-col">
                                <div className="Blog-event-card">
                                    <div className="Event-blog-img">
                                        <img src={blog.image} alt="Blog_img" />
                                        <div className="Blog-date">
                                            <h6>{blog.date.day}</h6>
                                            <h6>{blog.date.month}</h6>
                                        </div>
                                    </div>
                                    <div className="Event-blog-content">
                                        <h6><Link to="/events">{blog.location}</Link></h6>
                                        <h5>{blog.title}</h5>
                                        <p>{blog.time}</p>
                                        <p>{blog.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BlogEvent