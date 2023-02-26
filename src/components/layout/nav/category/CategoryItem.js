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
  height: 46px;
  // border-bottom: 2px solid #fa9370;
`;

const Bar = styled.div`
  position: sticky;
  width: 150px;
  height: 3px;
  background-color: ${(props) => props.theme.color.main};
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
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
        <Div>
          <SelectedCategoryButton>{menu}</SelectedCategoryButton>
          <Bar />
        </Div>
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
