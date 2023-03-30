import React from 'react';
import '../Hero/Hero.css'

export const Hero = ()=>{
    return(
        <>
        <div className="container">
            <div className="hero-left">
                <h4>Welcome to MediCare+ Clinic</h4>
                <h2>Best Specialists</h2>
                <p>We are on the leading edge of cancer care. Providing the full continuum of cancer treatments and supportive care services in a single convenient location.</p>
                <div className="hero-left-btn">
                    <button className='btn-1'>Make an Appointment</button>
                    <button className='btn-2'>Departments</button>
                </div>



            </div>
            <div className="hero-right">
                <div></div>
            </div>
        </div>
        </>

    );
}