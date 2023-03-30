import React from 'react'
import './DoctorCard.css'

export const DoctorCard = ({name, profession}) => {
  return (
    <div className='doctorCard-container'>
         <div className="doctor-img"></div>
            <div className="doctor-detail">
                <h1>{name}</h1>
                <p>{profession}</p>
            </div>
    </div>
  )
}
