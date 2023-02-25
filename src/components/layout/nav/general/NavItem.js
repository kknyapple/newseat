import React from "react";
import styled from "styled-components";

const NavButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  margin: 0px 15px 0px 15px;
  font-weight: 700;
`;

const NavItem = (props) => {
  const menu = props.menu;
  const link = props.link;

  return <NavButton>{menu}</NavButton>;
};

export default NavItem;
