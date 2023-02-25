import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem";

const NavBox = styled.nav`
  display: flex;
`;

const NavComponent = () => {
  const generalMenu = [
    {
      name: "홈",
      link: "/",
    },
    {
      name: "My",
      link: "/my",
    },
  ];

  return (
    <NavBox>
      {generalMenu.map(({ name, link }) => (
        <NavItem key={name} menu={name} link={link} />
      ))}
    </NavBox>
  );
};

export default NavComponent;
