import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import axios from "axios";
import { categoryState } from "../../../../recoil/frontend";
import VideoItem from "./VideoItem";
import { useQuery } from "react-query";

const VideoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 1200px;
  margin-top: 44px;
`;

const VideoComponent = () => {
  const [category, setCategory] = useRecoilState(categoryState);
  const [videoId, setVideoId] = useState([]);

  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

  const shuffleArray = (sourceArr) => {
    const array = sourceArr.concat();
    // 피셔 예이츠 알고리즘
    const arrayLength = array.length;
    for (let i = arrayLength - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }

    return array;
  };

  const { data: allData } = useQuery(["allData", category], () => {
    if (category === "전체") {
      return axios
        .all([
          axios.get(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUcQTRi69dsVYHN3exePtZ1A&maxResults=2&key=${apiKey}`
          ),
          axios.get(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUkinYTS9IHqOEwR1Sze2JTw&maxResults=2&key=${apiKey}`
          ),
          axios.get(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUF4Wxdo3inmxP-Y59wXDsFw&maxResults=2&key=${apiKey}`
          ),
          axios.get(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUsU-I-vHLiaMfV_ceaYz5rQ&maxResults=2&key=${apiKey}`
          ),
          axios.get(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUhlgI3UHCOnwUGzWzbJ3H5w&maxResults=2&key=${apiKey}`
          ),
          axios.get(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUfq4V1DAuaojnr2ryvWNysw&maxResults=2&key=${apiKey}`
          ),
        ])
        .then(
          axios.spread((res1, res2, res3, res4, res5, res6) => {
            const data1 = res1.data.items;
            const data2 = res2.data.items;
            const data3 = res3.data.items;
            const data4 = res4.data.items;
            const data5 = res5.data.items;
            const data6 = res6.data.items;
            const res = [
              ...data1,
              ...data2,
              ...data3,
              ...data4,
              ...data5,
              ...data6,
            ];

            let copy = [];

            res.forEach((item) => {
              copy.push(item.snippet.resourceId.videoId);
            });

            setVideoId(shuffleArray(copy));

            copy = [];
          })
        );
    } else {
      let playlistId;

      if (category === "KBS") {
        playlistId = "UUcQTRi69dsVYHN3exePtZ1A";
      }
      if (category === "SBS") {
        playlistId = "UUkinYTS9IHqOEwR1Sze2JTw";
      }
      if (category === "MBC") {
        playlistId = "UUF4Wxdo3inmxP-Y59wXDsFw";
      }
      if (category === "JTBC") {
        playlistId = "UUsU-I-vHLiaMfV_ceaYz5rQ";
      }
      if (category === "YTN") {
        playlistId = "UUhlgI3UHCOnwUGzWzbJ3H5w";
      }
      if (category === "채널A") {
        playlistId = "UUfq4V1DAuaojnr2ryvWNysw";
      }

      axios
        .get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=12&key=${apiKey}`
        )
        .then((res) => {
          //setVideoList(res.data.items);

          // id만 저장하기
          let copy = [];

          res.data.items.forEach((item) => {
            copy.push(item.snippet.resourceId.videoId);

            setVideoId(copy);
          });
          copy = [];
        })
        .catch(() => {
          console.log("fail");
        });
    }
  });

  const { data: videoList, isLoading: videoListLoading } = useQuery(
    ["videoList", videoId],
    () => {
      let id = videoId.join(",");
      return axios(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&id=${id}&key=${apiKey}`
      );
    }
  );

  return (
    <VideoBox>
      {videoListLoading && <div>loading..</div>}
      {videoList &&
        videoList.data.items.map((video) => (
          <VideoItem
            key={video.id}
            id={video.id}
            thumbnail={video.snippet.thumbnails.medium.url}
            title={video.snippet.title}
            channelTitle={video.snippet.channelTitle}
            date={video.snippet.publishedAt}
            description={video.snippet.description}
            duration={video.contentDetails.duration}
          />
        ))}
    </VideoBox>
  );
};

export default VideoComponent;
