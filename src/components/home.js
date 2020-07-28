import React,{useEffect} from 'react';
import "./home.css";
import Aos from 'aos';
import 'aos/dist/aos.css';


const Home = props => {
  const { id } = props

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])


  return(
    <div className="home" id={id}>
    <div className="home_text" data-aos="fade-right" >
    <p><span>We</span> are here</p>
    <p>to <span>Serve</span> you and </p>
     <p> bring <span>you</span>r ideas to life .</p>
    </div>
    </div>
  )
}

export default Home;