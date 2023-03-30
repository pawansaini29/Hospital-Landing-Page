import React from 'react'
import '../ClinicCard/ClinicCard.css'

export const ClinicCard = ({img, detail}) => {
    return (
      <div className='ClinicCard flex item-center justify-between '>
          <img className='img' src={img} alt="" />
          <div className='detail'>{detail}</div>
      </div>
    );
  }
  