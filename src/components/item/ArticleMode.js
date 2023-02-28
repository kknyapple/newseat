import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState } from "../../recoil/frontend";

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

const ArticleMode = () => {
  const [category, setCategory] = useRecoilState(categoryState);
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/");
    setCategory("전체");
  };

  return (
    <ModeBox onClick={clickHandler}>
      <Link to="/">
        <Icon src="/images/paperMode.svg" />
      </Link>
    </ModeBox>
  );
};

export default ArticleMode;
