import React, { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { modeState } from "../../../../recoil/frontend";
import CategoryItem from "./CategoryItem";

const NavBox = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: ${(props) => props.theme.color.lightGray};
  margin-top: 50px;
`;

const CategoryComponent = () => {
  const [selectMenu, setSelectMenu] = useState("전체");
  const [mode, setMode] = useRecoilState(modeState);

  const VideoMenu = [
    {
      name: "전체",
      link: "/",
    },
    {
      name: "KBS",
      link: "/video/kbs",
    },
    {
      name: "SBS",
      link: "/video/sbs",
    },
    {
      name: "MBC",
      link: "/video/mbc",
    },
    {
      name: "JTBC",
      link: "/video/jtbc",
    },
    {
      name: "YTN",
      link: "/video/ytn",
    },
    {
      name: "채널A",
      link: "/video/channelA",
    },
  ];

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
      {(mode === 2 &&
        PaperMenu.map(({ name, link }) => (
          <CategoryItem key={name} menu={name} link={link} />
        ))) ||
        (mode === 1 &&
          VideoMenu.map(({ name, link }) => (
            <CategoryItem key={name} menu={name} link={link} />
          )))}
    </NavBox>
  );
};

export default CategoryComponent;
