import React from "react";
import styled from "styled-components";
import NavComponent from "../nav/general/NavComponent";
import { Link } from "react-router-dom";

const Header = styled.header`
  position: fixed;
  background-color: ${(props) => props.theme.color.white};
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  top: 0px;
  z-index: 10;
`;
const Logo = styled.img`
  width: 160px;
  margin: 0px 30px 0px 30px;
`;

const HeaderComponent = () => {
  return (
    <Header>
      <Link style={{ textDecoration: "none" }} to={`/`}>
        <Logo src="/images/logo.svg" />
      </Link>
      <NavComponent />
    </Header>
  );
};

export default HeaderComponent;
