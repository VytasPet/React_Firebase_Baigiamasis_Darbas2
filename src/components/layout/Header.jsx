import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Flexas from "../ui/Flex";

export const Headeris = styled.header`
  margin-top: 2rem;
  background-color: rgb(188, 188, 188);
  padding: 2rem 1.5rem;
  //position: absolute;
`;

const NavLinkai = styled(NavLink)`
  text-decoration: none;
`;
const Logo = styled(Link)`
  text-decoration: none;
`;

const NavDiv = styled.nav`
  display: flex;
  gap: 1rem;
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
