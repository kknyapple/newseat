import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState } from "../../../../recoil/frontend";

const CategoryButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: 700;
  width: 150px;
  height: 60px;
`;

const SelectedCategoryButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: 700;
  width: 150px;
  height: 60px;
  border-bottom: 4px solid #fa9370;
`;

const CategoryItem = (props) => {
  const menu = props.menu;
  const link = props.link;

  const [category, setCategory] = useRecoilState(categoryState);

  const selectHandler = (name) => {
    setCategory(name);
  };

  return (
    <>
      {category === menu ? (
        <SelectedCategoryButton>{menu}</SelectedCategoryButton>
      ) : (
        <CategoryButton
          onClick={() => {
            selectHandler(menu);
          }}
        >
          {menu}
        </CategoryButton>
      )}
    </>
  );
};

export default CategoryItem;
