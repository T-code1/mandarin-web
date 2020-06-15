import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from 'reactstrap';
import { Link } from "react-scroll";


const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

   const logStyles ={
     height: 45,
     width: 150
   }

 const navStyles={
   position: "fixed",
   fontSize: 16,
   fontWeight:8,
   padding:2, 
   marginTop:"3%",
   marginRight:"10%",
   cursor: "pointer"
  }
  return (
    <div>
      <Row>
        <Col xs="9">
          <NavbarBrand href="/"><img style={logStyles} className="logo" src={require("../images/Official_Logo.png")} alt="pixels" /></NavbarBrand>
        </Col>
        <Col >
          <Navbar light  expand="md" >
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar style={navStyles}>
              
                <NavItem >
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
                  <NavLink>
                    <Link
                      activeClass="active"
                      to="section3"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                    About
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
                      Clients
              </Link>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink >
                    <Link
                      activeClass="active"
                      to="section5"
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
