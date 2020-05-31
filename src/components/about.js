import React from 'react';
import  { Link } from 'react-router-dom';
import "./about.css"
const About = props => {
  const { id } = props
  return (
    // <div className="container-fluid">
    <div className="container-fluid about" id={id}>

      <div className="row content">

        <div className="col-sm-6"></div>

        <div className="col-sm-6 title">

          <h4>WHO WE ARE</h4>

          <div className="paragraph">

            <p>Traditionally in Feng Shuai, the Mandarin duck
              symbolizes love and passion, which is <br />
              why we chose this majestic bird as the token of our work.
            </p>

            <p>Founded by a young professional, Mandarin agency is
              vibrant with a modern approach <br /> at the same
              leaves you with a "feel at home" sentiment.
            </p>

            <p>We simply breed quality, Quality in every digitally
            possible way you can imagine.
            </p>

          </div>

          <div className="link">
          <Link to="/explore" >Explore <span>></span></Link>
          </div>

        </div>


      </div>

    </div>
    // </div>
  )
}

export default About;