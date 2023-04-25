import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Logout from "../../forms/Logout";
import { useAuthCtx } from "../../store/AuthProvider";
import { LoginButton } from "../ui/Button";

import { media } from "../ui/Responsive";

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

  ${media.mobile`
  font-size: 12px;
  padding: 10px 5px;
  `}

  :hover {
    color: white;
    background-color: #3b3b3b;
  }
  &.active {
    color: white;
    background-color: #3b3b3b;
  }
`;
const Logo = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 22px;
  font-family: Space Mono;
  ${media.mobile`
  font-size: 16px;
  `}
`;

const NavDiv = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
`;

function Header() {
  const { isLoggedIn } = useAuthCtx();
  return (
    <Headeris className="container">
      <Logo to={"/"}>Shops explorer</Logo>
      <NavDiv>
        <NavLinkai to={"/"}>Home</NavLinkai>
        {isLoggedIn && (
          <>
            <NavLinkai to={"/shops"}>Shops</NavLinkai>
            <NavLinkai to={"/addshop"}>Add Shop</NavLinkai>
          </>
        )}
        {!isLoggedIn && <LoginButton to={"/login"}>Login</LoginButton>}
        {isLoggedIn && <Logout />}
      </NavDiv>
    </Headeris>
  );
}

export default Header;
