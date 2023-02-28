import React from "react";
import styled from "styled-components";

const Article = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 687px;
  height: 140px;
  margin-bottom: 20px;
  margin-left: 15px;
  margin-right: 15px;
`;

const Img = styled.img`
  width: 207px;
  height: 140px;
  background-color: ${(props) => props.theme.color.lightGray};
  margin-right: 26px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 447px;
`;

const Title = styled.h2`
  font-size: 15px;
  font-weight: 600;
  margin: 0;
`;

const Description = styled.span`
  font-size: 15px;
  margin: 10px 0px 10px 0px;
`;

const Date = styled.span`
  font-size: 12px;
`;

const ArticleItem = (props) => {
  const url = props.img;
  const title = props.title;
  const date = props.date;
  const img = props.img;

  return (
    <Article>
      <Img src={img && img} />
      <Content>
        <Title>{title}</Title>
        <Description></Description>
        <Date>{date} </Date>
      </Content>
    </Article>
  );
};

export default ArticleItem;
