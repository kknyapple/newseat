import React from "react";
import styled from "styled-components";

const Video = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 265px;
  margin-bottom: 20px;
  margin-left: 15px;
  margin-right: 15px;
`;

const Thumbnail = styled.img`
  width: 320px;
  height: 180px;
  background-color: ${(props) => props.theme.color.lightGray};
`;

const Title = styled.h2`
  font-size: 15px;
  font-weight: 600;
  margin: 10px 0px 6px 0px;
`;

const Info = styled.span`
  font-size: 12px;
`;

const VideoItem = (props) => {
  const thumbnail = props.thumbnail;
  const title = props.title;
  const date = props.date;

  return (
    <Video>
      <Thumbnail src="" />
      <Title>{title}</Title>
      <Info>SBS 뉴스 · {date} </Info>
    </Video>
  );
};

export default VideoItem;
