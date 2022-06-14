import React from "react";
import styled from "styled-components";
import { ProductItems } from "../data";
import { Product } from "./Product";

const Container = styled.div`
  padding: 30px;
  display: flex;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const ProductList = () => {
  return (
    <Container>
      {ProductItems.map((product) => (
        <Product product={product} />
      ))}
    </Container>
  );
};
