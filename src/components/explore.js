import React, { useState } from 'react';
import Footer from './footer';
import './explore.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';


const logStyles = {
	 position: 'fixed'
};

const navStyles = {
	cursor: 'pointer',
	fontSize: 14,
	fontWeight: 8,
	padding: 2,
	marginTop: '3%',
	marginRight: '10%',
	position:'fixed'
};

const Explore = (props) => {
	const { id } = props;
	const [ isOpen, setIsOpen ] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	return (
		<div>
			<div id={id}>
				<Row>
					<Col xs="6">
						<NavbarBrand href="/">
							<img
								style={logStyles}
								className="logo"
								src={require('../images/Official_Logo.png')}
								alt="pixels"
							/>
						</NavbarBrand>
					</Col>
					<Col>
						<Navbar light expand="md">
							<NavbarToggler onClick={toggle} />
							<Collapse isOpen={isOpen} navbar>
								<Nav className="mr-auto" navbar style={navStyles}>
									<NavItem>
										<NavLink>
											<Link className="homeNav" to="/home">Home</Link>
										</NavLink>
									</NavItem>

									<NavItem>
										<NavLink>
											<Link className="homeNav" to="/services">Services</Link>
										</NavLink>
									</NavItem>

									<NavItem>
										<NavLink>
											<Link className="homeNav" to="/client">Client</Link>
										</NavLink>
									</NavItem>

									<NavItem>
										<NavLink>
											<Link className="homeNav" to="/about">About</Link>
										</NavLink>
									</NavItem>

									<NavItem>
										<NavLink>
											<Link className="homeNav" to="/contact">Contact</Link>
										</NavLink>
									</NavItem>
								</Nav>
							</Collapse>
						</Navbar>
					</Col>
				</Row>
			</div>

			<div />

			<div className="explore-container">
				<div className="texts">
					<p className="toServe">HERE TO SERVE</p>
					<p className="text">Our native eye to detail continously pushes</p>
					<p className="text">boundary to help you reach your reach your audience effortly</p>
				</div>
				<div className="col explores">
					<div className="row firstRow">
						<div className="rowOne">
							<div className="startegyImage">
								<img src={require('../images/explore/strategy.svg')} alt="img" id="stategy" />
							</div>
							<div className="strategyText">
								<div className="strategyTitle">
									<h4>Digital Strategy</h4>
								</div>
								<div className="strategyPragraph">
									<p>Through well-planned campains with anlytics</p>
									<p>we open up the digital world to your outstanding business</p>
									<p>we believe every business is outstanding bu some lack</p>
									<p>a custimezed digtal campaign to prove.</p>
								</div>
							</div>
						</div>

						<div className="rowOne">
							<div className="startegyImage">
								<img src={require('../images/explore/computeradvetise.svg')} alt="img" id="stategy" />
							</div>
							<div className="strategyText">
								<div className="strategyTitle">
									<h4>Graphic Design and Content Creation</h4>
								</div>
								<div className="strategyPragraph">
									<p>The content we create embodies your brand,resonates with your</p>
									<p>audience which is then complemented withtasteful graphics to</p>
									<p>consistely make you stand oout in a saturated platform.</p>
								</div>
							</div>
						</div>

						<div className="rowOne">
							<div className="startegyImage">
								<img src={require('../images/explore/qr-code.svg')} alt="img" id="stategy" />
							</div>
							<div className="strategyText">
								<div className="strategyTitle">
									<h4>App and Software Technology</h4>
								</div>
								<div className="strategyPragraph">
									<p>Carefully designed and specifically curated for your product</p>
									<p>or services,our compeetitive apps will ultimately</p>
									<p>help you reach your marketing goals</p>
								</div>
							</div>
						</div>
					</div>

					<div className="row firstRow">
						<div className="rowOne">
							<div className="startegyImage">
								<img src={require('../images/explore/world-wide-web.svg')} alt="img" id="stategy" />
							</div>
							<div className="strategyText">
								<div className="strategyTitle">
									<h4>Website and Micro-Sites</h4>
								</div>
								<div className="strategyPragraph">
									<p>Custom designed websites with a range of features is what your</p>
									<p>business is missing in order to stand out ,We design a wide range</p>
									<p>of professional websites that will bring your project to completion</p>
								</div>
							</div>
						</div>

						<div className="rowOne">
							<div className="startegyImage">
								<img src={require('../images/explore/seo.svg')} alt="img" id="stategy" />
							</div>
							<div className="strategyText">
								<div className="strategyTitle">
									<h4>SEM and Digital Advertising</h4>
								</div>
								<div className="strategyPragraph">
									<p>Our extensive knowledge of key-word strategy and latest digital</p>
									<p>advertisement tools simply yet effectively dilivers high quality</p>
									<p>advertisements.</p>
								</div>
							</div>
						</div>

						<div className="rowOne">
							<div className="startegyImage">
								<img src={require('../images/explore/seo.svg')} alt="img" id="stategy" />
							</div>
							<div className="strategyText">
								<div className="strategyTitle">
									<h4>SEO</h4>
								</div>
								<div className="strategyPragraph">
									<p>We offer SEO (Search Engine Optimization) services that are</p>
									<p>result-driven and meticulously nurture you brand visiblity</p>
									<p>and audience reach.Isange-img</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Explore;
