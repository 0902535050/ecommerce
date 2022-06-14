import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

//LEFT SIDE STYLED
const LeftSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Languages = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  margin-left: 25px;
  align-items: center;
  display: flex;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
`;

const Input = styled.input`
  border: none;
  outline: none;
`;

//RIGHT STYLE
const RightSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin: 0 10px;
`;

// MIDDLE STYLED
const MiddleSide = styled.div`
  flex: 1;
  text-align: center;
`;

const Header = styled.h1`
  font-weight: bold;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <LeftSide>
          <Languages>EN</Languages>
          <SearchContainer>
            <Input />
            <Search />
          </SearchContainer>
        </LeftSide>
        <MiddleSide>
          <Header>E-commerce</Header>
        </MiddleSide>
        <RightSide>
          <MenuItem>Login</MenuItem>
          <MenuItem>Register</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </RightSide>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
