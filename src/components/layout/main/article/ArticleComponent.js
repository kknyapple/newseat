import React from "react";
import styled from "styled-components";
import ArticleItem from "./ArticleItem";

const ArticleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 670px;
  margin-top: 44px;
`;

const ArticleComponent = () => {
  const article = [
    {
      img: "",
      title: "내가 가락동 34평 월세 사느라 매달 내는 돈",
      description:
        "월세만 나홀로 급등 부동산 가격이 요동을 치면서 시장 구조에 큰 변화가 오고 있습니다. 현재 임대 시장의 가장 큰 흐름은 전세의 급격한 축소인데요 부동산 임대 시장을 긴급 점검...",
      date: "2023년 02월 26일",
    },
    {
      img: "",
      title: "내가 가락동 34평 월세 사느라 매달 내는 돈",
      description:
        "월세만 나홀로 급등 부동산 가격이 요동을 치면서 시장 구조에 큰 변화가 오고 있습니다. 현재 임대 시장의 가장 큰 흐름은 전세의 급격한 축소인데요 부동산 임대 시장을 긴급 점검...",
      date: "2023년 02월 26일",
    },
    {
      img: "",
      title: "내가 가락동 34평 월세 사느라 매달 내는 돈",
      description:
        "월세만 나홀로 급등 부동산 가격이 요동을 치면서 시장 구조에 큰 변화가 오고 있습니다. 현재 임대 시장의 가장 큰 흐름은 전세의 급격한 축소인데요 부동산 임대 시장을 긴급 점검...",
      date: "2023년 02월 26일",
    },
    {
      img: "",
      title: "내가 가락동 34평 월세 사느라 매달 내는 돈",
      description:
        "월세만 나홀로 급등 부동산 가격이 요동을 치면서 시장 구조에 큰 변화가 오고 있습니다. 현재 임대 시장의 가장 큰 흐름은 전세의 급격한 축소인데요 부동산 임대 시장을 긴급 점검...",
      date: "2023년 02월 26일",
    },
    {
      img: "",
      title: "내가 가락동 34평 월세 사느라 매달 내는 돈",
      description:
        "월세만 나홀로 급등 부동산 가격이 요동을 치면서 시장 구조에 큰 변화가 오고 있습니다. 현재 임대 시장의 가장 큰 흐름은 전세의 급격한 축소인데요 부동산 임대 시장을 긴급 점검...",
      date: "2023년 02월 26일",
    },
    {
      img: "",
      title: "내가 가락동 34평 월세 사느라 매달 내는 돈",
      description:
        "월세만 나홀로 급등 부동산 가격이 요동을 치면서 시장 구조에 큰 변화가 오고 있습니다. 현재 임대 시장의 가장 큰 흐름은 전세의 급격한 축소인데요 부동산 임대 시장을 긴급 점검...",
      date: "2023년 02월 26일",
    },
    {
      img: "",
      title: "내가 가락동 34평 월세 사느라 매달 내는 돈",
      description:
        "월세만 나홀로 급등 부동산 가격이 요동을 치면서 시장 구조에 큰 변화가 오고 있습니다. 현재 임대 시장의 가장 큰 흐름은 전세의 급격한 축소인데요 부동산 임대 시장을 긴급 점검...",
      date: "2023년 02월 26일",
    },
    {
      img: "",
      title: "내가 가락동 34평 월세 사느라 매달 내는 돈",
      description:
        "월세만 나홀로 급등 부동산 가격이 요동을 치면서 시장 구조에 큰 변화가 오고 있습니다. 현재 임대 시장의 가장 큰 흐름은 전세의 급격한 축소인데요 부동산 임대 시장을 긴급 점검...",
      date: "2023년 02월 26일",
    },
    {
      img: "",
      title: "내가 가락동 34평 월세 사느라 매달 내는 돈",
      description:
        "월세만 나홀로 급등 부동산 가격이 요동을 치면서 시장 구조에 큰 변화가 오고 있습니다. 현재 임대 시장의 가장 큰 흐름은 전세의 급격한 축소인데요 부동산 임대 시장을 긴급 점검...",
      date: "2023년 02월 26일",
    },
    {
      img: "",
      title: "내가 가락동 34평 월세 사느라 매달 내는 돈",
      description:
        "월세만 나홀로 급등 부동산 가격이 요동을 치면서 시장 구조에 큰 변화가 오고 있습니다. 현재 임대 시장의 가장 큰 흐름은 전세의 급격한 축소인데요 부동산 임대 시장을 긴급 점검...",
      date: "2023년 02월 26일",
    },
    {
      img: "",
      title: "내가 가락동 34평 월세 사느라 매달 내는 돈",
      description:
        "월세만 나홀로 급등 부동산 가격이 요동을 치면서 시장 구조에 큰 변화가 오고 있습니다. 현재 임대 시장의 가장 큰 흐름은 전세의 급격한 축소인데요 부동산 임대 시장을 긴급 점검...",
      date: "2023년 02월 26일",
    },
  ];

  return (
    <ArticleBox>
      {article.map(({ img, title, description, date }) => (
        <ArticleItem
          key={title}
          img={img}
          title={title}
          description={description}
          date={date}
        />
      ))}
    </ArticleBox>
  );
};

export default ArticleComponent;
