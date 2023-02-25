import React from "react";
import styled from "styled-components";
import Mode from "../components/item/Mode";
import HeaderComponent from "../components/layout/header/HeaderComponent";
import ArticleComponent from "../components/layout/main/article/ArticleComponent";
import CategoryComponent from "../components/layout/nav/category/CategoryComponent";

const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ArticlePage = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <CategoryComponent />
      <Main>
        <ArticleComponent />
      </Main>
      <Mode />
    </React.Fragment>
  );
};

export default ArticlePage;
