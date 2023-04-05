import React from "react";
import { useRecoilState } from "recoil";
import { selectedVideoState } from "../../../../recoil/frontend";
import { useParams } from "react-router";

const VideoDetail = () => {
  const [selectedVideo, setSelectedVideo] = useRecoilState(selectedVideoState);
  const params = useParams();

  let detailInfo = params.detailId;

  return (
    <section>
      <iframe
        type="text/html"
        title="youtube video player"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${detailInfo}?autoplay=1&mute=1`}
        allowFullScreen
      ></iframe>
      <h2>{selectedVideo.title}</h2>
      <h3>{selectedVideo.channelTitle}</h3>
      <pre>{selectedVideo.description}</pre>
    </section>
  );
};

export default VideoDetail;
