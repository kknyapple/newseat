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
  background-color: ${(props) => props.theme.color.gray};
`;

const Title = styled.h2`
  font-size: 15px;
  font-weight: 600;
  margin: 10px 0px 6px 0px;
  background-color: ${(props) => props.theme.color.gray};
  width: 320px;
  height: 20px;
`;

const Info = styled.span`
  font-size: 12px;
  background-color: ${(props) => props.theme.color.gray};
  width: 150px;
  height: 20px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Skeleton = () => {
  return (
    <Video>
      <Thumbnail />
      <Title />
      <Info />
    </Video>
  );
};

export default Skeleton;
