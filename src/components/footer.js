import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import "./footer.css";
import { Link } from 'react-router-dom';
const Footer = () => {
   return (
      <React.Fragment>
         <div className="footer">
            <div className="column1">
               <h6>About Us</h6>
               <p id="text1">A multi-faced company that offers an array</p>
               <p id="text1">of digital, advertising and web developments services</p>
            </div>

            <div className="column2">
               <h6> More About Us</h6>
               <p id="text1">Team</p>
               <p id="text1">Our Works</p>
               <p id="text1">Services</p>
               <p id="text1">Jobs</p>
            </div>

            <div className="column3">
               <h6>Contact</h6>
               <p id="text1">+(250)784658958</p>
               <p id="text1">info@madarinagency digital</p>
               <p id="text1">Kigali Rwanda</p>
            </div>

            <div className="column4 ">
               <h6>Stay Connected</h6>
               <p id="text4">Subscribe to our Newsletter</p>
               <div className="email_input">
                  <input type="email" id="emailInput" name="Email" placeholder="Email address" />
                  <p id="button">SUBSCRIBE</p>

               </div>
               <div className='socialMedia'>
                  <Link to=""><FaFacebookF id="fb" /></Link>
                  <Link to=""><FaTwitter id="fb" /></Link>
                  <Link to=""><FaInstagram id="fb" /></Link>
               </div>
            </div>
         </div>
         <div className="copy">
            <div className="line">

            </div>

            <p> &copy; 2020 Copyright , All rights reserved.</p>

         </div>

      </React.Fragment>
   )
}

export default Footer;