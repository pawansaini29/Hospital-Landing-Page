import React from 'react'
import './Newsletter.css'

export const Newsletter = () => {
  return (
    <div className='newsletter-container'>
        <div className="newsletter">
            <div className="text">
            <h1>Subscribe to Newsletter</h1>
            <p>We have a wide experience in experience design and strategy,</p>
            </div>
            <div className="email">
            <input type="text" placeholder='Enter your email address' />
            <button>Send Now</button>
            </div>
        </div>
    </div>
  )
}
