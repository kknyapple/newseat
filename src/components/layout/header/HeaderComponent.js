import React from "react";
import styled from "styled-components";
import NavComponent from "../nav/general/NavComponent";

const Header = styled.header`
  position: fixed;
  background-color: ${(props) => props.theme.color.white};
  height: 50px;
  width: 100%;
  display: flex;
  top: 0px;
`;
const Logo = styled.img`
  width: 160px;
  margin: 0px 30px 0px 30px;
`;

const HeaderComponent = () => {
  return (
    <Header>
      <Logo src="/images/logo.svg" />
      <NavComponent />
    </Header>
  );
};

export default HeaderComponent;
