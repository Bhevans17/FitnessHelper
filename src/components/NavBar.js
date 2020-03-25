import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='mb-5 py-2 border-bottom' expand='sm'>
        <Container>
          <NavbarBrand href='/'>
            <span style={{ color: "#62CD11" }}>FITNESS</span>
            <span style={{ color: "#26BEFF" }}>HELPER</span>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink style={{ color: "#62CD11" }} href='#macro-calculator'>
                  Macro Calculator
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink style={{ color: "#62CD11" }} href='#search-food'>
                  Search Food
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Example;
