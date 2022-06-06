import React from "react";
import { Header, Nav, Logo, Ol, Li } from "./style";

const Navbar = () => {
  return (
    <Header>
      <Nav>
        <div>
          <Logo>Rizal Priyono</Logo>
        </div>
        <div>
          <Ol>
            <Li>About</Li>
            <Li>Experiences</Li>
            <Li>Projects</Li>
          </Ol>
        </div>
      </Nav>
    </Header>
  );
};

export default Navbar;
