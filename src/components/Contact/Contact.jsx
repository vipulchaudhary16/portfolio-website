import React, { useRef, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import emailjs from "emailjs-com";
import "./contact.css";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    if (message.trim() === "" || name.trim() === "")
      alert("Empty String Nahi chalega re baba");
    else
      emailjs
        .sendForm(
          "service_qrhepzd",
          "template_ab5jnvm",
          form.current,
          "dsVOPTZ96Cl17jFbT"
        )
        .then(
          (result) => {
            alert("Message sent");
            e.target.reset();
          },
          (error) => {
            alert(error.text);
          }
        );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__icon" />
            <h4>Email</h4>
            <h5>vipul.cce20@sot.pdpu.ac.in</h5>
            <a
              href="mailto:vipul.cce20@sot.pdpu.ac.in"
              target="_blank"
              rel="noopener"
            >
              Let's Talk
            </a>
          </article>

          {/* <article>
            <AiOutlineMail/>
            <h4>WhatsApp</h4>
            <h5></h5>
            <a href="https://wa.me/?text=Hi Vipul" target='_blank'>Let's Talk</a>
          </article> */}

          <article className="contact__option">
            <FiTwitter className="contact__icon" />
            <h4>Twitter</h4>
            <h5>c_vipul_r</h5>
            <a
              href="https://twitter.com/c_vipul_r"
              target="_blank"
              rel="noopener"
            >
              Let's Connect
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Good Name ( Required )"
            required
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email ( Not Required )"
          />
          <textarea
            name="message"
            id="message"
            rows="10"
            placeholder="Type a message ( Required )"
            required
            onChange={e => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
