import React from 'react';
import Navigation from "./navigation";
import Home from "./home";
import Services from "./services";
import About from "./about";
import Contact from "./contact";

const LandingPage = ()=>{
return(
  <div>
  <Navigation/>
  <Home/>
  <Services/>
  <About/>
  <Contact/>
  </div>
)
}

export default LandingPage;
