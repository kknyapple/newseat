import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState } from "../../../../recoil/frontend";
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
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [category, setCategory] = useRecoilState(categoryState);
  /* const article = [
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
  ]; */

  const { data: articleData } = useQuery(["articleData", category], () => {
    let categoryId;
    if (category === "전체") {
      categoryId = "general";
    }
    if (category === "비즈니스") {
      categoryId = "business";
    }
    if (category === "엔터") {
      categoryId = "entertainment";
    }
    if (category === "건강") {
      categoryId = "health";
    }
    if (category === "과학") {
      categoryId = "science";
    }
    if (category === "스포츠") {
      categoryId = "sports";
    }
    if (category === "기술") {
      categoryId = "technology";
    }

    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr&category=${categoryId}&sortBy=publishedAt&apiKey=${apiKey}`
    );
  });

  return (
    <ArticleBox>
      {articleData &&
        articleData.data.articles.map((article) => (
          <ArticleItem
            key={article.title}
            img={article.urlToImage}
            url={article.url}
            title={article.title}
            date={article.publishedAt}
          />
        ))}
    </ArticleBox>
  );
};

export default ArticleComponent;
