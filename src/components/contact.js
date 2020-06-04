
import React, { useEffect } from 'react';
import "./contact.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
const Contact = props => {
  const { id } = props
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  return (
    <div className="container-fluid contact" id={id}>

      <p id="h-contact" data-aos="fade-down">Tell us what <br />
       you are interested in.
       </p>

      <form data-aos="fade-up" action="/email">
        <input type="text" id="name" name="Name" placeholder="Name" /><br />
        <input type="email" id="email" name="Email" placeholder="Email" /><br />
        <input type="text" id="message" name="Message" placeholder="message" /><br />
        <button className="button">SEND</button>
      </form>
    </div>
  )

}

export default Contact;
