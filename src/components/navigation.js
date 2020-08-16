import React, { useState } from 'react';
import './navigation.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import { Link } from 'react-scroll';

const Navigations = (props) => {
	const { id } = props;
	const [ isOpen, setIsOpen ] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	const navStyles = {
		cursor: 'pointer',
		fontSize: 14,
		fontWeight: 8,
		padding: 2,
		marginTop: '3%',
		marginRight: '10%',
		position: 'fixed'
	};

	return (
		<div id={id}>
			<Row>
				<Col xs="6">
					<NavbarBrand href="/">
						<img className="logo" src={require('../images/Official_Logo.png')} alt="pixels" />
					</NavbarBrand>
				</Col>
				<Col>
					<Navbar light expand="md">
						<NavbarToggler onClick={toggle} />
						<Collapse isOpen={isOpen} navbar>
							<Nav className="mr-auto" navbar style={navStyles}>
								<NavItem>
									<NavLink>
										<Link
											activeClass="active"
											to="section1"
											spy={true}
											smooth={true}
											offset={0}
											duration={500}
										>
											HOME
										</Link>
									</NavLink>
								</NavItem>

								{/* This is the first navigation */}

								<NavItem>
									<NavLink>
										<Link
											activeClass="active"
											to="section2"
											spy={true}
											smooth={true}
											offset={0}
											duration={500}
										>
											SERVICES
										</Link>
									</NavLink>
								</NavItem>

								{/* This is the first navigation */}

								<NavItem>
									<NavLink>
										<Link
											activeClass="active"
											to="section3"
											spy={true}
											smooth={true}
											offset={0}
											duration={500}
										>
											WHO WE ARE
										</Link>
									</NavLink>
								</NavItem>

								<NavItem>
									<NavLink>
										<Link
											activeClass="active"
											to="section5"
											spy={true}
											smooth={true}
											offset={0}
											duration={500}
										>
											CONTACT
										</Link>
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Navbar>
				</Col>
			</Row>
		</div>
	);
};

export default Navigations;
