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
import {Link} from "react-scroll";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
     {/* <Container> */}
     <Row>
       <Col xs="9">
    <NavbarBrand href="/">MANDARIN</NavbarBrand>
       </Col>
       <Col >
       <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink >
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
               Contact
              </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
       </Col>
     </Row>
     {/* </Container> */}
    </div>
  );
}

export default Example;
