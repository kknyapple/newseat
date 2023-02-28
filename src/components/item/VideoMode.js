import React, { useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { categoryState } from "../../recoil/frontend";
import { Link, useNavigate } from "react-router-dom";

const ModeBox = styled.div`
  display: flex;
  position: fixed;
  bottom: 60px;
  right: 40px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 120px;
`;

const VideoMode = () => {
  const [category, setCategory] = useRecoilState(categoryState);
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/article");
    setCategory("전체");
  };

  return (
    <ModeBox onClick={clickHandler}>
      <Link to="/">
        <Icon src="/images/videoMode.svg" />
      </Link>
    </ModeBox>
  );
};

export default VideoMode;
