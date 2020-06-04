import React, { useEffect } from 'react';
import "./services.css"
import Aos from 'aos';
import 'aos/dist/aos.css';
const Services = props => {
  const { id } = props
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  return (
    // <div className="container-fluid">
    <div className="container-fluid services" id={id}>

      <div className="row content">

        <div data-aos="fade-right" className="col-sm-6 image">
          <img className="image" src={require("../images/MacBook Pro 16.png")} alt="MacBook Pro 16" />
        </div>

        <div data-aos="fade-left" className=" title">
          <h3>Services</h3>
          <p>" Simplicity is not the goal, it is by-product<br />
            of a good idea and modest expectations."<br />
            -Paul Rand
            </p>
          <a href="www.divine" id="pexplore">Explore <span>></span> </a>
        </div>

      </div>

    </div>
    // </div>
  )
}

export default Services;