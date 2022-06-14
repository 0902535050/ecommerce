import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: #fff;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  display: flex;
`;

export const Announcement = () => {
  return <Container>Announcement</Container>;
};