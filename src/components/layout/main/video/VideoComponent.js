import React from "react";
import styled from "styled-components";
import VideoItem from "./VideoItem";

const VideoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 700px;
  margin-top: 44px;
`;

const VideoComponent = () => {
  const video = [
    {
      thumbnail: "",
      title:
        "황의조 데뷔 서울, 인천 제압을 하다 / SBS에서 8시 뉴스 전해드립니다",
      date: "2023년 02월 26일",
    },
    {
      thumbnail: "",
      title:
        "황의조 데뷔 서울, 인천 제압을 하다 / SBS에서 8시 뉴스 전해드립니다",
      date: "2023년 02월 26일",
    },
    {
      thumbnail: "",
      title:
        "황의조 데뷔 서울, 인천 제압을 하다 / SBS에서 8시 뉴스 전해드립니다",
      date: "2023년 02월 26일",
    },
    {
      thumbnail: "",
      title:
        "황의조 데뷔 서울, 인천 제압을 하다 / SBS에서 8시 뉴스 전해드립니다",
      date: "2023년 02월 26일",
    },
    {
      thumbnail: "",
      title:
        "황의조 데뷔 서울, 인천 제압을 하다 / SBS에서 8시 뉴스 전해드립니다",
      date: "2023년 02월 26일",
    },
    {
      thumbnail: "",
      title:
        "황의조 데뷔 서울, 인천 제압을 하다 / SBS에서 8시 뉴스 전해드립니다",
      date: "2023년 02월 26일",
    },
    {
      thumbnail: "",
      title:
        "황의조 데뷔 서울, 인천 제압을 하다 / SBS에서 8시 뉴스 전해드립니다",
      date: "2023년 02월 26일",
    },
    {
      thumbnail: "",
      title:
        "황의조 데뷔 서울, 인천 제압을 하다 / SBS에서 8시 뉴스 전해드립니다",
      date: "2023년 02월 26일",
    },
    {
      thumbnail: "",
      title:
        "황의조 데뷔 서울, 인천 제압을 하다 / SBS에서 8시 뉴스 전해드립니다",
      date: "2023년 02월 26일",
    },
    {
      thumbnail: "",
      title:
        "황의조 데뷔 서울, 인천 제압을 하다 / SBS에서 8시 뉴스 전해드립니다",
      date: "2023년 02월 26일",
    },
    {
      thumbnail: "",
      title:
        "황의조 데뷔 서울, 인천 제압을 하다 / SBS에서 8시 뉴스 전해드립니다",
      date: "2023년 02월 26일",
    },
    {
      thumbnail: "",
      title:
        "황의조 데뷔 서울, 인천 제압을 하다 / SBS에서 8시 뉴스 전해드립니다",
      date: "2023년 02월 26일",
    },
    {
      thumbnail: "",
      title:
        "황의조 데뷔 서울, 인천 제압을 하다 / SBS에서 8시 뉴스 전해드립니다",
      date: "2023년 02월 26일",
    },
    {
      thumbnail: "",
      title:
        "황의조 데뷔 서울, 인천 제압을 하다 / SBS에서 8시 뉴스 전해드립니다",
      date: "2023년 02월 26일",
    },
    {
      thumbnail: "",
      title:
        "황의조 데뷔 서울, 인천 제압을 하다 / SBS에서 8시 뉴스 전해드립니다",
      date: "2023년 02월 26일",
    },
    {
      thumbnail: "",
      title:
        "황의조 데뷔 서울, 인천 제압을 하다 / SBS에서 8시 뉴스 전해드립니다",
      date: "2023년 02월 26일",
    },
    {
      thumbnail: "",
      title:
        "황의조 데뷔 서울, 인천 제압을 하다 / SBS에서 8시 뉴스 전해드립니다",
      date: "2023년 02월 26일",
    },
    {
      thumbnail: "",
      title:
        "황의조 데뷔 서울, 인천 제압을 하다 / SBS에서 8시 뉴스 전해드립니다",
      date: "2023년 02월 26일",
    },
    {
      thumbnail: "",
      title:
        "황의조 데뷔 서울, 인천 제압을 하다 / SBS에서 8시 뉴스 전해드립니다",
      date: "2023년 02월 26일",
    },
    {
      thumbnail: "",
      title:
        "황의조 데뷔 서울, 인천 제압을 하다 / SBS에서 8시 뉴스 전해드립니다",
      date: "2023년 02월 26일",
    },
    {
      thumbnail: "",
      title:
        "황의조 데뷔 서울, 인천 제압을 하다 / SBS에서 8시 뉴스 전해드립니다",
      date: "2023년 02월 26일",
    },
    {
      thumbnail: "",
      title:
        "황의조 데뷔 서울, 인천 제압을 하다 / SBS에서 8시 뉴스 전해드립니다",
      date: "2023년 02월 26일",
    },
    {
      thumbnail: "",
      title:
        "황의조 데뷔 서울, 인천 제압을 하다 / SBS에서 8시 뉴스 전해드립니다",
      date: "2023년 02월 26일",
    },
    {
      thumbnail: "",
      title:
        "황의조 데뷔 서울, 인천 제압을 하다 / SBS에서 8시 뉴스 전해드립니다",
      date: "2023년 02월 26일",
    },
    {
      thumbnail: "",
      title:
        "황의조 데뷔 서울, 인천 제압을 하다 / SBS에서 8시 뉴스 전해드립니다",
      date: "2023년 02월 26일",
    },
    {
      thumbnail: "",
      title:
        "황의조 데뷔 서울, 인천 제압을 하다 / SBS에서 8시 뉴스 전해드립니다",
      date: "2023년 02월 26일",
    },
  ];

  return (
    <VideoBox>
      {video.map(({ thumbnail, title, date }) => (
        <VideoItem
          key={title}
          thumbnail={thumbnail}
          title={title}
          date={date}
        />
      ))}
    </VideoBox>
  );
};

export default VideoComponent;
