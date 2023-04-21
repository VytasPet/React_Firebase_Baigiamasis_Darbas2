import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { ButtonFullLink, LoginButton } from "../ui/Button";
import Flexas from "../ui/Flex";

export const Headeris = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const NavLinkai = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: 500;
  padding: 20px 10px;
  :hover {
    color: white;
    background-color: #3b3b3b;
  }
  :active {
    color: white;
    background-color: #3b3b3b;
  }
`;
const Logo = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 22px;
  font-family: Space Mono;
`;

const NavDiv = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;

function Header() {
  return (
    <Headeris className="container">
      <Logo to={"/"}>Shops explorer</Logo>
      <NavDiv>
        <NavLinkai to={"/"}>Home</NavLinkai>
        <NavLinkai to={"/shops"}>Shops</NavLinkai>
        <NavLinkai to={"/addshop"}>Add Shop</NavLinkai>
        <LoginButton to={"/login"}>Login</LoginButton>
      </NavDiv>
    </Headeris>
  );
}

export default Header;
