import { ArrowRightOutlined, ArrowLeftOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { SliderItems } from "../data";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
`;

const Arrow = styled.div`
  height: 50px;
  width: 50px;
  background-color: #948a8a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "leftSide" && "10px"};
  right: ${(props) => props.direction === "rightSide" && "10px"};
  opacity: 0.5;
  cursor: pointer;
  z-index: 2;
  &:hover {
    transform: scale(1.2);
    transition: all 0.5s ease;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const InfoContainer = styled.div`
  padding: 50px;
  flex: 1;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

export const Slider = () => {
  const [slideIndex, setSlideIndeX] = useState(0);
  const handleClick = (direction) => {
    if (direction === "leftSide") {
      setSlideIndeX(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndeX(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="leftSide" onClick={() => handleClick("leftSide")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {SliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Show now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="rightSide" onClick={() => handleClick("rightSide")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};
