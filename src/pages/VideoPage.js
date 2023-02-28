import React from "react";
import styled from "styled-components";
import VideoMode from "../components/item/VideoMode";
import HeaderComponent from "../components/layout/header/HeaderComponent";
import VideoComponent from "../components/layout/main/video/VideoComponent";
import VideoCategoryComponent from "../components/layout/nav/category/VideoCategoryComponent";

const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const VideoPage = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <VideoCategoryComponent />
      <Main>
        <VideoComponent />
      </Main>
      <VideoMode />
    </React.Fragment>
  );
};

export default VideoPage;
