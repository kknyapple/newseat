import React from "react";
import styled from "styled-components";
import Mode from "../components/item/Mode";
import HeaderComponent from "../components/layout/header/HeaderComponent";
import VideoComponent from "../components/layout/main/video/VideoComponent";
import CategoryComponent from "../components/layout/nav/category/CategoryComponent";

const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const VideoPage = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <CategoryComponent />
      <Main>
        <VideoComponent />
      </Main>
      <Mode />
    </React.Fragment>
  );
};

export default VideoPage;
