import {
  FavoriteOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
`;

const Container = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 280px;
  height: 350px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid #80afbe;
  /* background-color: #f5fbfd; */
  &:hover ${Info} {
    opacity: 1;
    transition: all 0.5s ease;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  z-index: 2;
  object-fit: cover;
`;

const Icon = styled.div`
  background-color: #fff;
  border-radius: 50%;
  margin: 0 10px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
    background-color: #000;
    color: #fff;
    transition: all 0.5s ease;
  }
`;

export const Product = ({ product }) => {
  return (
    <Container>
      <Circle />
      <Image src={product.img} key={product.id} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteOutlined />
        </Icon>
      </Info>
    </Container>
  );
};
