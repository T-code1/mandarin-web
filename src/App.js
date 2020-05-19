import React from 'react';
import Explore from "./components/explore";
import LandingPage from "./components/landingpage";
import './App.css';
import Services from './components/services';
import Contact from './components/contact';
const App = () => {
  return (
    <div>
      <LandingPage />
      <Explore />

    </div>
  )
}

export default App;
