import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/myself.png'
import HeaderSocials from './HeaderSocials'

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Vipul Chaudhary</h1>
        <h5 className="text-light">
          Computer Engineering Student
        </h5>
        <CTA/>
        <HeaderSocials/>


        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}
