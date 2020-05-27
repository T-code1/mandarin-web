import React from 'react';
import "./contact.css";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const Contact = props => {
  const { id } = props
  return (
    <div>
      <div className="contactUs" >
        <div className="contactform" id={id}>
          <h1 className="tell">Tell Us what</h1>
          <h1 className="youare">you are interested in.</h1>
          <Form>
            <FormGroup>
              <Label >Name</Label>
              <Input type="text" name="name" id="name" placeholder="Name" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input type="textarea" name="message" id="message" />
            </FormGroup>
            <Button style={{color:'white', borderRadius:'24px', backgroundColor: 'green', marginLeft: '80px', fontFamily:'intro', width: '240px'}}>Submit</Button>
          </Form>
        </div>
        <div className="contImage"><img src={require("../images/04.png")} style={{width: '848px',height:'597px', borderTopLeftRadius: '488px', borderBottomLeftRadius: '488px', borderBottomRightRadius: '488px' }} alt="pexels" /></div>
      </div>
      <div className="footer">
        <div className="aboutus"><h3>About Us</h3><p>A multi-faceted company that offererd an array of digital advertising and web development services.</p></div>
        <div className="maboutus"><h3>More about Us</h3><p>Team<br></br>Our works<br></br>Services<br></br>Jobs</p></div>
        <div className="maboutus"><h3>Contact</h3><p>(+250)787687612<br></br>info@mandarinagency.digital<br></br>Kigali, Rwanda</p></div>
        <div className="maboutus"><h3>Contact</h3><p>(+250)787687612<br></br><Form inline>
          <Input type="text" placeholder="Search" className="mr-sm-2" />
          <Button className="search">Search</Button>
        </Form>Kigali, Rwanda</p></div>
      </div>
    </div>
  )

}

export default Contact;
