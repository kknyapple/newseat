import React from "react";
import styled from "styled-components";

import VideoDetail from "../components/layout/main/video/VideoDetail";
import HeaderComponent from "../components/layout/header/HeaderComponent";
import VideoCategoryComponent from "../components/layout/nav/category/VideoCategoryComponent";

const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const VideoDetailPage = () => {
  return (
    <>
      <HeaderComponent />
      <VideoDetail />
    </>
  );
};

export default VideoDetailPage;
