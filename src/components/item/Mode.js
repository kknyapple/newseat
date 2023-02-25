import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState, modeState } from "../../recoil/frontend";

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

const Mode = () => {
  const [mode, setMode] = useRecoilState(modeState);
  const [category, setCategory] = useRecoilState(categoryState);

  const clickHandler = () => {
    if (mode === 1) {
      setMode(2);
    } else if (mode === 2) {
      setMode(1);
    } else {
      setMode(1);
    }

    setCategory("전체");
  };

  return (
    <ModeBox onClick={clickHandler}>
      {(mode === 1 && (
        <Link to="/article">
          <Icon src="/images/videoMode.svg" />
        </Link>
      )) ||
        (mode === 2 && (
          <Link to="/">
            <Icon src="/images/paperMode.svg" />
          </Link>
        ))}
    </ModeBox>
  );
};

export default Mode;
