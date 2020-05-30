import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // Container, 
  Row,
  Col
} from 'reactstrap';
import { Link } from "react-scroll";


const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
 const logostyle={
   fontSize:25,
   marginLeft:"10%"
 }
 const navStyles={
   fontSize:11,
   padding:2, 
   marginTop:"3%",
   marginRight:"10%",
   cusor:"pointer"
  }
  return (
    <div>
      {/* <Container> */}
      <Row>
        <Col xs="9">
          <NavbarBrand style={logostyle}href="/"><img className="logo" src={require("../images/Official_Logo.png")} alt="pexels" /></NavbarBrand>
        </Col>
        <Col >
          <Navbar light style={navStyles}  expand="md" >
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink style={{color:"orange"}}>
                    <Link
                      activeClass="active"
                      to="section1"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Home
              </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <Link
                      activeClass="active"
                      to="section2"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Services
              </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink >
                    <Link
                      activeClass="active"
                      to="section3"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                    Who we are
              </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink >
                    <Link
                      activeClass="active"
                      to="section4"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Contact
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
}

export default Example;
