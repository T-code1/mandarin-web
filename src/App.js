import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Explore from './components/explore';
import LandingPage from './components/landingpage';
// import Home from './components/home';
import Services from './components/services';
import Client from './components/client';
import About from './components/about';
import Contact from './components/contact';
import './App.css';

const App = () => {
	return (
		<Fragment>
			<Router>
				<Fragment>
					<Switch>
						<Route exact path="/" component={LandingPage} />
						<Route exact path="/explore" component={Explore} />
						<Route exact path="/home" component={LandingPage} />
						<Route exact path="/services" component={Services} />
						<Route exact path="/client" component={Client} />
						<Route exact path="/about" component={About} />
						<Route exact path="/contact" component={Contact} />
					</Switch>
				</Fragment>
			</Router>
		</Fragment>
	);
};

export default App;
