import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";

const NavBox = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: ${(props) => props.theme.color.lightGray};
  margin-top: 50px;
`;

const ArticleCategoryComponent = () => {
  const PaperMenu = [
    {
      name: "전체",
      link: "/",
    },
    {
      name: "비즈니스",
      link: "/paper",
    },
    {
      name: "엔터",
      link: "/paper",
    },
    {
      name: "건강",
      link: "/paper",
    },
    {
      name: "과학",
      link: "/paper",
    },
    {
      name: "스포츠",
      link: "/paper",
    },
    {
      name: "기술",
      link: "/paper",
    },
  ];

  return (
    <NavBox>
      {PaperMenu.map(({ name, link }) => (
        <CategoryItem key={name} menu={name} link={link} />
      ))}
    </NavBox>
  );
};

export default ArticleCategoryComponent;
