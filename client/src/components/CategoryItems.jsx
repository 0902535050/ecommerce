import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  position: relative;
  margin: 5px;
  height: 70vh;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 30px;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  background-color: #fff;
  color: #b64c4c;
  padding: 15px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  &:hover {
    background-color: #b64c4c;
    color: #fff;
    transition: all 0.5s ease;
  }
`;
export const CategoryItems = ({ cat }) => {
  return (
    <Container>
      <Image src={cat.img} />
      <Info>
        <Title>{cat.title}</Title>
        <Button>Show more</Button>
      </Info>
    </Container>
  );
};
