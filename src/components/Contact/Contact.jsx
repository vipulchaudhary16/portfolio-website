import React, { useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import emailjs from 'emailjs-com';
import "./contact.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qrhepzd', 'template_ab5jnvm', form.current, 'dsVOPTZ96Cl17jFbT')
      .then((result) => {
          alert("Message sent")
          e.target.reset();
      }, (error) => {
          alert(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__icon"/>
            <h4>Email</h4>
            <h5>vipulr6111@gmail.com</h5>
            <a href="mailto:vipulr6111@gmail.com" target='_blank'>Let's Talk</a>
          </article>

          {/* <article>
            <AiOutlineMail/>
            <h4>WhatsApp</h4>
            <h5></h5>
            <a href="https://wa.me/?text=Hi Vipul" target='_blank'>Let's Talk</a>
          </article> */}

          <article className="contact__option">
            <FiTwitter className="contact__icon"/>
            <h4>Twitter</h4>
            <h5>c_vipul_r</h5>
            <a href="https://twitter.com/c_vipul_r" target='_blank'>Let's Connect</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Good Name' required />
          <input type="email" name="email" id="email"  placeholder="Your Email"/>
          <textarea name="message" id="message" rows="10" placeholder="Type a message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}
