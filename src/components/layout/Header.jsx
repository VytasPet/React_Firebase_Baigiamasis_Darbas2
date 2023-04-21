import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { ButtonFullLink } from "../ui/Button";
import Flexas from "../ui/Flex";

export const Headeris = styled.header`
  margin: 20px 50px;
  align-items: center;
  /* display: flex;
  justify-content: space-between; */
`;

const NavLinkai = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: 500;
  padding: 20px 10px;
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
    <Headeris>
      <Flexas justify="space-between">
        <Logo>Shops explorer</Logo>
        <NavDiv>
          <NavLinkai to={"/"}>Home</NavLinkai>
          <NavLinkai to={"/shops"}>Shops</NavLinkai>
          <NavLinkai to={"/addshop"}>Add Shop</NavLinkai>
          <ButtonFullLink to={"/login"}>Login</ButtonFullLink>
        </NavDiv>
      </Flexas>
    </Headeris>
  );
}

export default Header;
