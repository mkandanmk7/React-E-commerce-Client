import React from "react";
import styled from "styled-components";
import { small, medium, large } from "../responsive";

import { Badge } from "@material-ui/core";
import {
  LocalMallOutlined,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";

const NavContainer = styled.div`
  background-color: #25283d;
  color: #fff; ;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  ${medium({ height: "50px", padding: " 10px 0" })}
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Cookie", cursive;
  cursor: pointer;
  font-size: 2rem;
  height: auto;
  flex: 1;
  text-decoration: none;
  color: white;
  ${medium({ fontSize: "1rem", marginRight: "0", flex: "0" })}
  ${small({ fontSize: "1rem" })}
`;
const Middle = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  ${medium({ flex: "0" })}
`;
const Input = styled.input`
  height: 32px;
  width: 20rem;
  border-radius: 5px;
  border: none;
  padding: 5px;
  ${medium({ width: "10rem" })};
  ${small({ width: "4rem" })};
  ${large({ width: "7rem" })};
  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled(Search)`
  background-color: white;
  color: #25283d;
  border-radius: 5px;
  position: relative;

  left: -7.5px;

  padding: 9px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  gap: 0.8rem;
  justify-content: end;
  ${medium({ flex: "0", marginRight: "0.65rem" })}
  /* ${small({ fontSize: "0.6rem !important", gap: "0.2rem" })} */
${small({ display: "none" })}
`;
const Item = styled.div`
display:flex;
align-items:center;


& > *{
cursor: pointer;
font-size: 1.12rem;
${small({ fontSize: "0.6rem !important" })}
${medium({ fontSize: "1rem !important" })}
`;
const SmallerDiv = styled.div`
  padding: 10px 20px;
  display: none;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  ${medium({ height: "50px", padding: " 10px 0" })}
  ${small({ display: "flex" })}
`;

const Navbar = () => {
  return (
    <NavContainer>
      <Wrapper>
        <Left>
          <p>Make You Up</p>
        </Left>
        <Middle>
          <Input type="text" value="hello" placeholder="search..." />
          <SearchIcon />
        </Middle>
        <Right>
          <p>Hi</p>
          <p>Explore</p>
          <p>Login</p>
          <p>Register</p>
          <p>Logout</p>
          <Item>
            <p>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </p>
          </Item>
          <Item>
            <LocalMallOutlined />
          </Item>
        </Right>
      </Wrapper>

      <SmallerDiv>
        <Item>
          <p>Hi</p>
        </Item>
        <Item>
          <p>Explor</p>
        </Item>
        <Item>
          <p>Login</p>
        </Item>
        <Item>
          <p>Register</p>
        </Item>
        <Item>
          <p>Logout</p>
        </Item>
        <Item>
          <p>
            <Badge>
              <ShoppingCartOutlined />
            </Badge>
          </p>
        </Item>
        <Item>
          <LocalMallOutlined />
        </Item>
      </SmallerDiv>
    </NavContainer>
  );
};

export default Navbar;
