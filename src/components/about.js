import React, { useEffect } from 'react';
import "./about.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const About = props => {
  const { id } = props
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  return (
    <React.Fragment>
      {/* // <div className="container-fluid"> */}
      <div className="container-fluid about" id={id}>

        <div className="row content">

          <div className="col-sm-6"></div>

          <div className="col-sm-6 title">



            <p id="heading" data-aos="fade-down">WHO WE ARE</p>

            <div data-aos="fade-up" className="paragraph">

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

            <div data-aos="fade-up" className="link">
              <Link to="/explore" id="link">Explore ></Link>
            </div>

          </div>


        </div>

      </div>

      {/* // </div> */}
    </React.Fragment>


  )
}

export default About;