import React from 'react'
import '../CustomerReview/CustomerReview.css'
// import Patient1 from '../../Assets/patient1.png'

export const CustomerReview = ({img, heading, name, patient}) => {
    return (
        <div className='customer-review-container'>
            <div className="oval">
                <p>“</p>
            </div>

         {/* <div className="customer-review-card  ">
            <div className="heading">I wanted to thanks everyone at this facility for the quality of care and compassion they showed during my stay.</div>
            <div className="customer-detail ">
                <div className="customer-img">
                    <img src={Patient1} alt="" />
                </div>
                <div className="customer-info">
                    <div className="customer-name">Jacqueline Asong</div>
                    <div className="customer-patient">Patient</div>

                </div>
            </div>
        </div>  */}

            <div className="customer-review-card  ">
                <div className="heading">{heading}</div>
                <div className="customer-detail ">
                    <div className="customer-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="customer-info">
                        <div className="customer-name">{name}</div>
                        <div className="customer-patient">{patient}</div>

                    </div>
                </div>
            </div>


        </div>
    )
}


{/* //dynamically */ }