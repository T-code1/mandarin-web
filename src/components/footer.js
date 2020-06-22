import React from 'react';

import "./footer.css";
const Footer =()=>{
   return (
      <React.Fragment>
           <div className="footer">
        <div className="column1">
        <h6>About Us</h6>
        <p id="text1">A multi-faced company that offers an array</p>
        <p id="text1">of digital,advertising and web developments services</p>
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
        <p id="text1">Kigali,Rwanda</p>
        </div>

        <div className="column4 ">
        <h6>Stay Connected</h6>
        <p id="text4">Subscribe to our Newsletter</p>
         <div className="email_input">
         <input type="email" id="emailInput" name="Email" placeholder="Email address" />
         <button id="button">SUBCRIBE</button>
         </div>
        </div>
       </div>
       <div className='socialMedia'>
       <img className="fb-img" src={require("../images/fblog.png")} alt="fb" />
       <img className="ig-img" src={require("../images/instagramlogo.png")} alt="fb" />
       <img className="tt-img" src={require("../images/twitterlogl.png")} alt="fb" />
       </div>
        <div className="copy">
        <p> &2020 Copyright,All rights reserved.</p>
        </div>
      </React.Fragment>
   )
}

export default Footer;