import React from 'react';
import "./services.css"
const Services = props => {
  const { id } = props
  return (
    // <div className="container-fluid">
    <div className="container-fluid services" id={id}>

      <div className="row content">

        <div className="col-sm image">
          <img className="image" src={require("../images/MacBook Pro 16.png")} alt="MacBook Pro 16" />
        </div>

        <div className="col-sm title">
          <h3>Services</h3>
          <p>"Simplicity is not the goal, it is by-product<br />
            of a good idea and modest expectations."<br />
            -Paul Rand
            </p>
          <a href="www.divine" id="pexplore">Explore ></a>
        </div>

      </div>

    </div>
    // </div>
  )
}

export default Services;