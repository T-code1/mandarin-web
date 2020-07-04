import React, { useState } from 'react';
import "./navigation.css"
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
  const { id } = props
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

   const logStyles ={
     height: 45,
     width: 150,
    marginTop:40,
    position: 'fixed'
   }

 const navStyles={
  cursor: "pointer",
   fontSize: 16,
   fontWeight:8,
   padding:2, 
   marginTop:"3%",
   marginRight:"10%",
   position:'fixed'
  }

  return (
    <div  id={id}>
      <Row>
        <Col xs="8">
          <NavbarBrand href="/"><img style={logStyles} className="logo" src={require("../images/Official_Logo.png")} alt="pixels" /></NavbarBrand>
        </Col>
        <Col >
          <Navbar light  expand="md" >
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
                      Home
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
                      Services
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
                    About
              </Link>
                  </NavLink>
                </NavItem>


                 <NavItem>
                  <NavLink>
                    <Link
                      activeClass="active"
                      to="section4"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >
                  Client
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
                      offset={0}
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
