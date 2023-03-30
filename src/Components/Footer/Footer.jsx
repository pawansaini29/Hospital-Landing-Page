import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTooth } from '@fortawesome/free-solid-svg-icons'
import { FaFacebookF } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className='footer-container'>
      <Navbar />
      <div className="copyright">
        <div className="social-media">
          <div className="icon">
          <FaFacebookF />           
          </div>
          <div className="icon">
          <FaGoogle />
          </div>
          <div className="icon">
          <FaTwitter />
          </div>
        </div>
        <div className="rights">
          <h1>©2023 PodPayment - 2023</h1>
        </div>
      </div>
    </div>
  )
}
