import React,{Fragment} from 'react';
import Navigation from "./navigation";
import Home from "./home";
import Services from "./services";
import About from "./about";
import Contact from "./contact";

const LandingPage = ()=>{
return(
  <Fragment>
  <Navigation/>
  <Home id="section1" />
  <Services id="section2" />
  <About id="section3" />
  <Contact id="section4" />
  </Fragment>
)
}

export default LandingPage;
