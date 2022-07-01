import React from 'react'
import './testimonials.css'
import SwipingTestimonials from './SwipingTestimonials'

export default function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Words from my batchmates</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <SwipingTestimonials/>
      </div>
    </section>
  )
}
