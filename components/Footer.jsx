import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import { BsTwitter, BsInstagram ,BsWhatsapp } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="footer-container">
      <br />
      <br />
      <p>2024 Hafiz Abdullah All rights reserverd</p>
      
      <br />

     <div style={{display:'flex', flexDirection: 'row-reverse'}} className='app-icons'>
    {/*<div style={{marginLeft:'14px'}}><a href="https://x.com/HAbdullah64120?t=A4DtAJ3RCYzHm_adImU8AQ&s=08" target="_blank" rel="noopener noreferrer">
      <BsTwitter />
  </a></div>*/}
    
    <div style={{marginLeft:'14px'}} className='icons'><a href="https://web.facebook.com/profile.php?id=61557564147342" target="_blank" rel="noopener noreferrer">
    <FaFacebookF />
  </a></div>
    <div style={{marginLeft:'14px'}} className='icons'><a href="https://www.instagram.com/ha_store_77/" target="_blank" rel="noopener noreferrer">
      <BsInstagram /></a>
          </div>
      <div style={{marginLeft:'14px'}} className='icons'><a href="https://wa.me/923340596908" target="_blank" rel="noopener noreferrer">
      <BsWhatsapp /></a></div>
    
    </div>
    </div>
  )
}

export default Footer