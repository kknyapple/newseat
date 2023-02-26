import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { videoListState } from "../../../../recoil/frontend";
import VideoItem from "./VideoItem";

const VideoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 1200px;
  margin-top: 44px;
`;

const VideoComponent = () => {
  const [videoList, setVideoList] = useRecoilState(videoListState);

  useEffect(() => {
    const result = {
      items: [
        {
          kind: "youtube#playlistItem",
          etag: "AeU2MLqZui0sEiTx3VPUHwptVHs",
          id: "VVVraW5ZVFM5SUhxT0V3UjFTemUySlR3Lmtla2o5VzB1YmVN",
          snippet: {
            publishedAt: "2023-02-26T06:30:10Z",
            channelId: "UCkinYTS9IHqOEwR1Sze2JTw",
            title:
              '"1시간에 300인분 조리"…외식업계에서 두팔 벌려 반기는 이유 / SBS / 모아보는 뉴스',
            description:
              "식당 내부를 돌아다니는 홀서빙 로봇은 이제 쉽게 볼 수 있습니다. \n\n특히 외식업계에서는 인건비를 줄일 수 있어 음식 조리부터 손님 응대까지 '로봇 직원'이 담당하는 곳들이 늘어나고 있는데요. \n\n사람과 닮은 모습으로 복잡한 노동을 해내는 로봇까지 등장한 가운데, 이런 추세가 더 가속되기 전에 사람과 로봇이 공존하기 위한 고민이 필요하다는 지적이 나옵니다.        \n\n00:00 일상에 스며든 로봇…'일자리' 우려 속 공존의 법칙\n01:50 \"자, 이거 받아\" 진짜 동료된다…곧 만나게 될 AI 로봇\n03:34  닭 튀기고 커피 내리는 로봇…자동화에 일자리는 어쩌나\n\n#SBS뉴스 #8뉴스 #실시간 으로 만나 보세요\n라이브 뉴스 채널 SBS 모바일24\n\n▶SBS 뉴스로 제보해주세요\n홈페이지: https://news.sbs.co.kr\n애플리케이션: 'SBS 뉴스' 앱 설치하고 제보\n카카오톡: 'SBS 뉴스'와 친구 맺고 채팅\n페이스북: 'SBS 뉴스' 검색해 메시지 전송\n이메일: sbs8news@sbs.co.kr\n문자: #6000\n전화: 02-2113-6000\n\n▶SBS 뉴스 채널 구독하기 : https://n.sbs.co.kr/youtube\n▶SBS 뉴스 라이브 : https://n.sbs.co.kr/live",
            thumbnails: {
              medium: {
                url: "https://i.ytimg.com/vi/kekj9W0ubeM/mqdefault.jpg",
                width: 320,
                height: 180,
              },
            },
            channelTitle: "SBS 뉴스",
            playlistId: "UUkinYTS9IHqOEwR1Sze2JTw",
            resourceId: {
              kind: "youtube#video",
              videoId: "kekj9W0ubeM",
            },
          },
        },
        {
          kind: "youtube#playlistItem",
          etag: "AeU2MLqZui0sEiTx3VPUHwptVHs",
          id: "VVVraW5ZVFM5SUhxT0V3UjFTemUySlR3Lmtla2o5VzB1YmVN",
          snippet: {
            publishedAt: "2023-02-26T06:30:10Z",
            channelId: "UCkinYTS9IHqOEwR1Sze2JTw",
            title:
              '"1시간에 300인분 조리"…외식업계에서 두팔 벌려 반기는 이유 / SBS / 모아보는 뉴스',
            description:
              "식당 내부를 돌아다니는 홀서빙 로봇은 이제 쉽게 볼 수 있습니다. \n\n특히 외식업계에서는 인건비를 줄일 수 있어 음식 조리부터 손님 응대까지 '로봇 직원'이 담당하는 곳들이 늘어나고 있는데요. \n\n사람과 닮은 모습으로 복잡한 노동을 해내는 로봇까지 등장한 가운데, 이런 추세가 더 가속되기 전에 사람과 로봇이 공존하기 위한 고민이 필요하다는 지적이 나옵니다.        \n\n00:00 일상에 스며든 로봇…'일자리' 우려 속 공존의 법칙\n01:50 \"자, 이거 받아\" 진짜 동료된다…곧 만나게 될 AI 로봇\n03:34  닭 튀기고 커피 내리는 로봇…자동화에 일자리는 어쩌나\n\n#SBS뉴스 #8뉴스 #실시간 으로 만나 보세요\n라이브 뉴스 채널 SBS 모바일24\n\n▶SBS 뉴스로 제보해주세요\n홈페이지: https://news.sbs.co.kr\n애플리케이션: 'SBS 뉴스' 앱 설치하고 제보\n카카오톡: 'SBS 뉴스'와 친구 맺고 채팅\n페이스북: 'SBS 뉴스' 검색해 메시지 전송\n이메일: sbs8news@sbs.co.kr\n문자: #6000\n전화: 02-2113-6000\n\n▶SBS 뉴스 채널 구독하기 : https://n.sbs.co.kr/youtube\n▶SBS 뉴스 라이브 : https://n.sbs.co.kr/live",
            thumbnails: {
              medium: {
                url: "https://i.ytimg.com/vi/kekj9W0ubeM/mqdefault.jpg",
                width: 320,
                height: 180,
              },
            },
            channelTitle: "SBS 뉴스",
            playlistId: "UUkinYTS9IHqOEwR1Sze2JTw",
            resourceId: {
              kind: "youtube#video",
              videoId: "kekj9W0ubeM",
            },
          },
        },
        {
          kind: "youtube#playlistItem",
          etag: "AeU2MLqZui0sEiTx3VPUHwptVHs",
          id: "VVVraW5ZVFM5SUhxT0V3UjFTemUySlR3Lmtla2o5VzB1YmVN",
          snippet: {
            publishedAt: "2023-02-26T06:30:10Z",
            channelId: "UCkinYTS9IHqOEwR1Sze2JTw",
            title:
              '"1시간에 300인분 조리"…외식업계에서 두팔 벌려 반기는 이유 / SBS / 모아보는 뉴스',
            description:
              "식당 내부를 돌아다니는 홀서빙 로봇은 이제 쉽게 볼 수 있습니다. \n\n특히 외식업계에서는 인건비를 줄일 수 있어 음식 조리부터 손님 응대까지 '로봇 직원'이 담당하는 곳들이 늘어나고 있는데요. \n\n사람과 닮은 모습으로 복잡한 노동을 해내는 로봇까지 등장한 가운데, 이런 추세가 더 가속되기 전에 사람과 로봇이 공존하기 위한 고민이 필요하다는 지적이 나옵니다.        \n\n00:00 일상에 스며든 로봇…'일자리' 우려 속 공존의 법칙\n01:50 \"자, 이거 받아\" 진짜 동료된다…곧 만나게 될 AI 로봇\n03:34  닭 튀기고 커피 내리는 로봇…자동화에 일자리는 어쩌나\n\n#SBS뉴스 #8뉴스 #실시간 으로 만나 보세요\n라이브 뉴스 채널 SBS 모바일24\n\n▶SBS 뉴스로 제보해주세요\n홈페이지: https://news.sbs.co.kr\n애플리케이션: 'SBS 뉴스' 앱 설치하고 제보\n카카오톡: 'SBS 뉴스'와 친구 맺고 채팅\n페이스북: 'SBS 뉴스' 검색해 메시지 전송\n이메일: sbs8news@sbs.co.kr\n문자: #6000\n전화: 02-2113-6000\n\n▶SBS 뉴스 채널 구독하기 : https://n.sbs.co.kr/youtube\n▶SBS 뉴스 라이브 : https://n.sbs.co.kr/live",
            thumbnails: {
              medium: {
                url: "https://i.ytimg.com/vi/kekj9W0ubeM/mqdefault.jpg",
                width: 320,
                height: 180,
              },
            },
            channelTitle: "SBS 뉴스",
            playlistId: "UUkinYTS9IHqOEwR1Sze2JTw",
            resourceId: {
              kind: "youtube#video",
              videoId: "kekj9W0ubeM",
            },
          },
        },
      ],
    };
    const videos = result.items;

    setVideoList(videos);
  }, []);

  return (
    <VideoBox>
      {videoList &&
        videoList.map((video) => (
          <VideoItem
            key={video.id}
            id={video.snippet.resourceId.videoId}
            thumbnail={video.snippet.thumbnails.medium.url}
            title={video.snippet.title}
            channelTitle={video.snippet.channelTitle}
            date={video.snippet.publishedAt}
            description={video.snippet.description}
          />
        ))}
    </VideoBox>
  );
};

export default VideoComponent;
