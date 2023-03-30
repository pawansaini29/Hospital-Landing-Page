import React from 'react'
import './Doctors.css'
import { DoctorCard } from '../DoctorCard/DoctorCard';


export const Doctors = () => {
    return (
        <div className='doctors-container'>
            <div className="doctors-heading">
                <h1>We Have The Best Specialist</h1>
            </div>
            <div className="doctors-subheading">
                <p>We have a wide experience in experience design and strategy, with locally-rooted knowledge.</p>
            </div>
            <div className="doctors-card">
                <div className="doctor-card1">
                    <DoctorCard name="Dr. Awaatif Al" profession="Dental Care" />
                </div>
                <div className="doctor-card2">
                    <DoctorCard name="Dr. Filipa Gaspar" profession="Cardiology" />
                </div>
                <div className="doctor-card3">
                    <DoctorCard name="Dr. Sukhmeet Gorae" profession="Neurological" />
                </div>
                <div className="doctor-card4">
                    <DoctorCard name="Dr. Siri Jakobsson" profession="Prediatrics" />
                </div>
            </div>
        </div>
    )
}
