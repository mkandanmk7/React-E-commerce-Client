import React from "react";
import styled from "styled-components";

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
`;
const Left = styled.div``;
const Middle = styled.div``;
const Input = styled.div``;

const Right = styled.div``;
const Item = styled.div``;
const SmallerDiv = styled.div``;

const Navbar = () => {
  return (
    <NavContainer>
      <Wrapper>
        <Left>
          <p>Make You Up</p>
        </Left>
        <Middle>
          <Input type="text" value="hello" placeholder="search..." />
          <Search />
        </Middle>
        <Right>
          <p>Hi</p>
          <p>Explore</p>
          <p>Login</p>
          <p>Register</p>
          <p>Logout</p>
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
        </Right>
      </Wrapper>

      <SmallerDiv>
        <Item>
          <p>Hi</p>
        </Item>
        <Item>
          <p>Explore</p>
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
