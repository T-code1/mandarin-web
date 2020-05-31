import React,{Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Explore from "./components/explore";
import LandingPage from "./components/landingpage";
import './App.css';
const App = () => {
  return(
 <Fragment>
    <Router>
    <Fragment>
      <Switch>
      <Route exact path ="/" component={LandingPage}/>
        <Route exact path ="/explore" component={Explore}/>
      </Switch>
    </Fragment>
  </Router>
 </Fragment>
 
  )
}


export default App;
