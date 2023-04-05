import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { Link } from "react-router-dom";

const NavBox = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: ${(props) => props.theme.color.lightGray};
  margin-top: 50px;
`;

const VideoCategoryComponent = () => {
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

  return (
    <NavBox>
      {VideoMenu.map(({ name, link }) => (
        <Link style={{ textDecoration: "none" }} to={`${link}`}>
          <CategoryItem key={name} menu={name} link={link} />
        </Link>
      ))}
    </NavBox>
  );
};

export default VideoCategoryComponent;
