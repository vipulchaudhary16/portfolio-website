import React from 'react'
import CV from '../../assets/resume.pdf'
import RTPCR from '../../assets/0921113773.pdf'
import './header.css'

function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
        <a href={RTPCR} download className='btn btn-primary'>Vipul RTPCR</a>
    </div>
  )
}

export default CTA