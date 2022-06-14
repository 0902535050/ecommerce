import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  font-size: 24px;
  font-weight: 300;
  margin: 10px;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid lightgrey;
`;
const Input = styled.input`
  flex: 11;
  border: none;
  outline: none;
  margin: 0 20px;
  font-size: 16px;
  &:focus {
    font-size: 20px;
  }
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  padding: 12px;
`;

export const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates your favorite products !</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};
