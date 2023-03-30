import React from 'react'
import './Clinic.css'
import { ClinicCard } from '../ClinicCard/ClinicCard';
import Nurse from '../../Assets/nurse.png'
import Care from '../../Assets/care.png'
import Ambulance from '../../Assets/ambulance.png'


export const Clinic = () => {
  return (
    <div className='clinic-container'>
        <div className="clinic-left">
            <h1>Clinic With Innovative</h1>
            <p>We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.</p>
            <button>Learn More</button>
        </div>
        <div className="clinic-right">
            <div className="clCard1">
            <ClinicCard  img={Nurse} detail="Qualified Doctors" /> 
            </div>
            <div className="clCard2">
            <ClinicCard  img={Care} detail="Emergency Care" /> 
            </div>
            <div className="clCard3">
            <ClinicCard  img={Ambulance} detail="24 Hours Service" />
            </div>
        </div>
    </div>
  )
}
