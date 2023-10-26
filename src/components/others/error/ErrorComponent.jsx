import React from 'react'
import { Link } from 'react-router-dom'

const ErrorComponent = () => {
  return (
    <div className='Error-wrapper'>
        <div className="Error-container">
            <div className="Error-row">
                <div className="Error-col">
                    <div className="Error-content">
                        <h2>PAGE NOT FOUND!</h2>
                        <p>The page you were looking for appears to have been moved, deleted or does not exist.</p>
                        <Link to='/'>Back To Homepage</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ErrorComponent