import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState } from "../../../../recoil/frontend";
import FlatSkeleton from "../../../item/FlatSkeleton";
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

  const { data: articleData, isLoading: articleDataLoading } = useQuery(
    ["articleData", category],
    () => {
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
    }
  );

  return (
    <ArticleBox>
      {articleDataLoading &&
        [0, 1, 2, 3, 4, 5, 6, 7, 8].map(() => <FlatSkeleton />)}
      {articleData &&
        articleData.data.articles.map((article) => (
          <ArticleItem
            key={article.title}
            img={article.urlToImage}
            url={article.url}
            title={article.title}
            date={article.publishedAt}
            author={article.author}
          />
        ))}
    </ArticleBox>
  );
};

export default ArticleComponent;
