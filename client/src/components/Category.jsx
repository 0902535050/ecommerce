import React from "react";
import styled from "styled-components";
import { CategoryItems } from "./CategoryItems";
import { CategoriesItems } from "../data";
const Container = styled.div`
  display: flex;
  padding: 30px;
  justify-content: space-between;
`;

export const Category = () => {
  console.log(CategoriesItems);
  return (
    <Container>
      {CategoriesItems.map((cat) => (
        <CategoryItems cat={cat} key={cat.id} />
      ))}
    </Container>
  );
};
