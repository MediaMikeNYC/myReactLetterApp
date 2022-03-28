import React, { useEffect } from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./navBarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={require("../../icon.png")} alt="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
        </NavMenu>

        <NavBtn>
          <NavBtnLink to="/">Sign in</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
