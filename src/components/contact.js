<<<<<<< HEAD
=======
import React from 'react';
import "./contact.css";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const Contact = props => {
  const { id } = props
  return (
    <div className="container-fluid contact" id={id}>

      <h2>Tell us what <br />
       you are interested in
       </h2>

      <form action="/email">
        <input type="text" id="name" name="Name" placeholder="Name" /><br />
        <input type="email" id="email" name="Email" placeholder="Email" /><br />
        <input type="text" id="message" name="Message" placeholder="message" /><br />
        <button className="button">SEND</button>
      </form>
    </div>
  )

}

export default Contact;
>>>>>>> cb2ab913f770133d54c6efd8b3291cc295b59f61
