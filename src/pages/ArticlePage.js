import React from "react";
import styled from "styled-components";
import ArticleMode from "../components/item/ArticleMode";
import HeaderComponent from "../components/layout/header/HeaderComponent";
import ArticleComponent from "../components/layout/main/article/ArticleComponent";
import ArticleCategoryComponent from "../components/layout/nav/category/ArticleCategoryComponent";

const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ArticlePage = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <ArticleCategoryComponent />
      <Main>
        <ArticleComponent />
      </Main>
      <ArticleMode />
    </React.Fragment>
  );
};

export default ArticlePage;
