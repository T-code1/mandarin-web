import React,{Fragment} from 'react';
import Navigation from "./navigation";
import Home from "./home";
import Services from "./services";
import Client from './client';
import About from "./about";
import Contact from "./contact";


const LandingPage = ()=>{
return(
  <Fragment>
  <Navigation id="section1" />
  <Home />
  <Services id="section2" />
  <About id="section3" />
  <Client id="section4"/>
  <Contact id="section5" />
  </Fragment>
)
}

export default LandingPage;
 