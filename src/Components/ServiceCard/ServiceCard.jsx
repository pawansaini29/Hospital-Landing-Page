import React from 'react'
import '../ServiceCard/ServiceCard.css'

export const ServiceCard = ({icon, detail,learnmore}) => {
  return (
    <div className='card'>
        <img src={icon} alt="" className={`icon?"hover:bg-violet-600":"hover:bg-white"`} />
        <div className='detail'>{detail}</div>
        <div className='learnmore'>{learnmore}</div>
    </div>
  );
}