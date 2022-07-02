import React from 'react'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import './footer.css'

export default function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>VIPUL</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://fb.com/chaudhary.vipul.7737" target='_blank' rel="noopener"><AiFillFacebook/></a>
        <a href="https://instagram.com/vipulchaudhary.class" target='_blank' rel="noopener"><AiOutlineInstagram/></a>
      </div>

      <div className="footer__copyright">&copy; VIPUL CHAUDHARY</div>
    </footer>
  )
}
