import React from 'react'
import { ServiceCard } from '../ServiceCard/ServiceCard'
import '../Service/Service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTooth } from '@fortawesome/free-solid-svg-icons'
import { faLungs } from '@fortawesome/free-solid-svg-icons'
import { faBrain } from '@fortawesome/free-solid-svg-icons'
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons'
import Tooth from '../../Assets/tooth.png'
import Lungs from '../../Assets/lungs.png'
import Brain from '../../Assets/brain.png'
import Board from '../../Assets/board.png'


export const Service = () => {
    return (
        <div className='service-container'>
            <div className="heading">
                <h1>Our Service</h1>
            </div>
            <div className="sub-heading">
                <p>We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.</p>
            </div>
            <div className="service-card">
                <div className="card card1">
                    <ServiceCard icon={Tooth} detail="Dental Care"  />
                </div>
                <div className="card card2">
                    <ServiceCard icon={Board} detail="Pulmonary" />
                </div>
                <div className="card card3">
                    <ServiceCard icon={Brain} detail="Neurological" />
                </div>
                <div className="card card4">
                    <ServiceCard icon={Board} detail="Prediatrics" />
                </div>

            </div>



        </div>
    )
}
