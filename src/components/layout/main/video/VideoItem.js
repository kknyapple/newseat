import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { selectedVideoState } from "../../../../recoil/frontend";

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
  color: ${(props) => props.theme.color.black};
`;

const Info = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.color.black};
`;

const VideoItem = (props) => {
  const id = props.id;
  const thumbnail = props.thumbnail;
  const channelTitle = props.channelTitle;
  const title = props.title;
  const date = props.date;
  const description = props.description;

  const [selectedVideo, setSelectedVideo] = useRecoilState(selectedVideoState);

  const clickHandler = () => {
    setSelectedVideo({
      id: id,
      channelTitle: channelTitle,
      title: title,
      date: date,
      description: description,
    });
  };

  return (
    <Link style={{ textDecoration: "none" }} to="/video/detail">
      <Video onClick={clickHandler}>
        <Thumbnail src={thumbnail} />
        {title.length < 60 ? (
          <Title>{title}</Title>
        ) : (
          <Title>{title.substr(0, 55)}...</Title>
        )}

        <Info>
          {channelTitle} · {date}
        </Info>
      </Video>
    </Link>
  );
};

export default VideoItem;
