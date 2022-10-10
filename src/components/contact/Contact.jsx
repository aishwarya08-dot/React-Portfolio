/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {MdEmail} from 'react-icons/md'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form=useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5rmnhtj', 'template_n89suuj', form.current, 'xWiSnMxrbqLCn79z9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdEmail/>
            <h4>Email</h4>
            <h5>aishwarya.m.pillai@gmail.com</h5>
            <a href="mailto:aishwarya.m.pillai@gmail.com" target='_blank' rel="email-link">Send a message</a>
           </article>

           <article className='contact__option'>
            <IoLogoWhatsapp/>
            <h4>Whatsapp</h4>
            <h5>8073926614</h5>
            <a href="https://api.whatsapp.com/send?phone=8073926614" target='_blank' rel="whatsapp-link">Send a message</a>
           </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your E-mail' required/>
          <textarea name="message" rows='7' placeholder='Your message' required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>

        </div>

    </section>
  )
}

export default Contact
