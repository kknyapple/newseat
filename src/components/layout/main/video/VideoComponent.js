import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import axios from "axios";
import { categoryState } from "../../../../recoil/frontend";
import VideoItem from "./VideoItem";
import { useQuery } from "react-query";
import Skeleton from "../../../item/Skeleton";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

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

  const params = useParams();

  let videoInfo = params.videoId;

  /* const shuffleArray = (sourceArr) => {
    const array = sourceArr.concat();
    // 피셔 예이츠 알고리즘
    const arrayLength = array.length;
    for (let i = arrayLength - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }

    return array;
  }; */

  const { data: allData } = useQuery(["allData", category], () => {
    let playlistId;

    if (videoInfo) {
      if (videoInfo === "kbs") {
        playlistId = "UUcQTRi69dsVYHN3exePtZ1A";
      } else if (videoInfo === "sbs") {
        playlistId = "UUkinYTS9IHqOEwR1Sze2JTw";
      } else if (videoInfo === "mbc") {
        playlistId = "UUF4Wxdo3inmxP-Y59wXDsFw";
      } else if (videoInfo === "jtbc") {
        playlistId = "UUsU-I-vHLiaMfV_ceaYz5rQ";
      } else if (videoInfo === "ytn") {
        playlistId = "UUhlgI3UHCOnwUGzWzbJ3H5w";
      } else if (videoInfo === "channelA") {
        playlistId = "UUfq4V1DAuaojnr2ryvWNysw";
      }

      return axios
        .get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=48&key=${apiKey}`
        )
        .then((res) => {
          let copy = [];

          copy = res.data.items.map((item) => item.snippet.resourceId.videoId);
          setVideoId(copy);

          copy = [];
        })
        .catch(() => {
          console.log("fail");
        });
    } else {
      return axios
        .all([
          axios.get(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUcQTRi69dsVYHN3exePtZ1A&maxResults=6&key=${apiKey}`
          ),
          axios.get(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUkinYTS9IHqOEwR1Sze2JTw&maxResults=6&key=${apiKey}`
          ),
          axios.get(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUF4Wxdo3inmxP-Y59wXDsFw&maxResults=6&key=${apiKey}`
          ),
          axios.get(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUsU-I-vHLiaMfV_ceaYz5rQ&maxResults=6&key=${apiKey}`
          ),
          axios.get(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUhlgI3UHCOnwUGzWzbJ3H5w&maxResults=6&key=${apiKey}`
          ),
          axios.get(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUfq4V1DAuaojnr2ryvWNysw&maxResults=6&key=${apiKey}`
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

            res.sort((a, b) => {
              return (
                new Date(b.snippet.publishedAt) -
                new Date(a.snippet.publishedAt)
              );
            });

            copy = res.map((item) => item.snippet.resourceId.videoId);

            setVideoId(copy);

            copy = [];
          })
        );
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
      {videoListLoading && [0, 1, 2, 3, 4, 5, 6, 7, 8].map(() => <Skeleton />)}
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
