import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Flexas from "../ui/Flex";

export const Headeris = styled.header`
  margin-top: 2rem;
  background-color: rgb(255 255 255 / 90%);
  padding: 0rem 1.5rem;
  position: absolute;
  z-index: 2;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  box-shadow: #000000 0px 0px 5px 0px;
  border-radius: 2px;
`;

const NavLinkai = styled(NavLink)`
  text-decoration: none;
  color: #cf9e78;
  font-weight: 500;
  padding: 2rem 1rem;
  :last-child {
    border-right: none;
  }
  :hover {
    color: white;
    background-color: #6e706f71;
  }
  :active {
    color: white;
    background-color: #6e706f71;
  }
`;
const Logo = styled(Link)`
  text-decoration: none;
  color: #6e706f;
  font-weight: 800;
  font-size: 1.9rem;
  font-family: Geneva;
`;

const NavDiv = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Header() {
  return (
    <Headeris className="container">
      <Flexas justify="space-between">
        <Logo>Shops explorer</Logo>
        <NavDiv>
          <NavLinkai to={"/"}>Home</NavLinkai>
          <NavLinkai to={"/shops"}>Shops</NavLinkai>
          <NavLinkai to={"/addshop"}>Add Shop</NavLinkai>
          <NavLinkai to={"/login"}>Login</NavLinkai>
          <NavLinkai to={"/register"}>Register</NavLinkai>
        </NavDiv>
      </Flexas>
    </Headeris>
  );
}

export default Header;
