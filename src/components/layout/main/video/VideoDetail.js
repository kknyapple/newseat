import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { selectedVideoState } from "../../../../recoil/frontend";
import { useParams } from "react-router";

const VideoContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  margin: 0px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Info = styled.h2`
  font-size: 15px;
  text-align: left;
  font-weight: 700;
  margin: 0;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Description = styled.div`
  margin-top: 24px;
  padding: 16px;
  font-size: 15px;
  background-color: ${(props) => props.theme.color.lightGray};
  text-align: left;
  white-space: pre-wrap;
  width: 70%;
  border-radius: 15px;
`;

const Toggle = styled.button`
  margin-top: 8px;
  background-color: transparent;
  border: none;
  text-decoration: underline;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin-top: 10px;
  width: 70%;
`;

const VideoDetail = () => {
  const [selectedVideo, setSelectedVideo] = useRecoilState(selectedVideoState);
  const [toggle, setToggle] = useState(false);
  const params = useParams();
  let detailInfo = params.detailId;

  const toggleDescription = () => {
    setToggle((prevState) => !prevState);
  };

  const convertUTCToKST = (utcDate) => {
    const date = new Date(utcDate);
    const kstTime = date.getTime();
    const kstDate = new Date(kstTime);

    const year = kstDate.getFullYear().toString().padStart(4, "0");
    const month = (kstDate.getMonth() + 1).toString().padStart(2, "0");
    const day = kstDate.getDate().toString().padStart(2, "0");
    const hours = kstDate.getHours().toString().padStart(2, "0");
    const minutes = kstDate.getMinutes().toString().padStart(2, "0");
    const seconds = kstDate.getSeconds().toString().padStart(2, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <VideoContainer>
      <iframe
        type="text/html"
        title="youtube video player"
        width="70%"
        height="360px"
        src={`https://www.youtube.com/embed/${detailInfo}?autoplay=1&mute=1`}
        allowFullScreen
      ></iframe>
      <Div>
        <Title>{selectedVideo.title}</Title>
        <Info>
          {selectedVideo.channelTitle} · {convertUTCToKST(selectedVideo.date)}
        </Info>
      </Div>

      <Description>
        {toggle
          ? selectedVideo.description
          : selectedVideo.description.slice(0, 100)}
        {selectedVideo.description.length > 100 && (
          <Toggle onClick={toggleDescription}>
            {toggle ? "간략히" : "더보기"}
          </Toggle>
        )}
      </Description>
    </VideoContainer>
  );
};

export default VideoDetail;
