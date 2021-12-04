import React, { useState } from "react";
import styled from "styled-components";
import { small, medium, large } from "../responsive";

import { Badge } from "@material-ui/core";
import {
  LocalMallOutlined,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const NavContainer = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;
  background-color: #25283d;
  opacity: 0.9;
  z-index: 1;

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
  font-family: "Cookie", cursive;

  cursor: pointer;
  font-size: 3rem;
  flex: 1;
  text-decoration: none;
  color: white;

  ${medium({ fontSize: "2rem", marginRight: "0", flex: "0" })}
  ${small({ fontSize: "1.4rem" })}
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

  border: none;
  padding: 5px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  ${medium({ width: "10rem" })};
  ${small({ width: "4rem" })};
  ${large({ width: "7rem" })};
  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled(Search)`
  background-color: white;
  height: 40px;
  color: #05060c;

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  position: relative;
  top: 0;
  right: -2px;
  padding: 16px;
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
  margin-top: 10px;
  & > * {
    cursor: pointer;
    font-size: 1.12rem;
    ${small({ fontSize: "0.6rem !important" })}
    ${medium({ fontSize: "1rem !important" })}
  }
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
  const quantity = useSelector((state) => state.cart.quantity);
  console.log("quantity", quantity);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);
  const history = useNavigate();
  const value = useSelector((state) => state.search.searchValue);
  const [search, setSearch] = useState(value);

  return (
    <NavContainer>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Left>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                lineHeight: "20%",
              }}
            >
              Make You Up
            </p>
          </Left>
        </Link>
        <Middle>
          <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search..."
          />
          {search.length > 1 ? (
            <Link to={`/products/name/${search.toLocaleLowerCase()}`}>
              <SearchIcon
                onClick={() => {
                  dispatch({ type: "addValue", value: search });
                }}
                style={{ fontSize: 32 }}
              />
            </Link>
          ) : (
            <Link to={`/products/`}>
              <SearchIcon
                onClick={() => {
                  dispatch({ type: "addValue", value: search });
                }}
                style={{ fontSize: 32 }}
              />
            </Link>
          )}
        </Middle>
        <Right>
          {user.currentUser && (
            <>
              <Item>
                <p style={{ width: "5.5rem" }}>
                  Hi,{user.currentUser.username}
                </p>
              </Item>
            </>
          )}
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={"/products"}
          >
            <Item>
              <p>Explore</p>
            </Item>
          </Link>
          {!user.currentUser && (
            <>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Item>
                  <p>LogIn</p>
                </Item>
              </Link>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Item>
                  <p>Register</p>
                </Item>
              </Link>
            </>
          )}
          {user.currentUser && (
            <>
              <Item>
                <p
                  onClick={() => {
                    dispatch({ type: "logOut" });
                    history("/");
                  }}
                >
                  Logout
                </p>
              </Item>
            </>
          )}

          <Item>
            <Link style={{ color: "inherit" }} to="/cart">
              <p>
                <Badge color="primary" badgeContent={quantity}>
                  <ShoppingCartOutlined />
                </Badge>
              </p>
            </Link>
          </Item>
          <Item>
            <Link style={{ color: "inherit" }} to="/order">
              <LocalMallOutlined style={{ marginBottom: "20px" }} />
            </Link>
          </Item>
        </Right>
      </Wrapper>

      <SmallerDiv>
        {user.currentUser && (
          <>
            <Item>
              <p style={{ width: "5.5rem" }}>Hi, {user.currentUser.username}</p>
            </Item>
          </>
        )}
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to={"/products"}
        >
          <Item>
            {" "}
            <p>Explore</p>
          </Item>
        </Link>
        {!user.currentUser && (
          <>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <Item>
                {" "}
                <p>LogIn</p>
              </Item>
            </Link>
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <Item>
                {" "}
                <p>Register</p>
              </Item>
            </Link>
          </>
        )}
        {user.currentUser && (
          <>
            <Item>
              <p
                onClick={() => {
                  dispatch({ type: "logOut" });
                  history.push("/");
                }}
              >
                LogOut
              </p>
            </Item>
          </>
        )}
        <Item>
          <Link style={{ color: "inherit" }} to="/cart">
            {" "}
            <p>
              <Badge color="primary" badgeContent={quantity}>
                <ShoppingCartOutlined />
              </Badge>
            </p>
          </Link>
        </Item>

        <Item>
          <Link style={{ color: "inherit" }} to="/order">
            <LocalMallOutlined />
          </Link>
        </Item>
      </SmallerDiv>
    </NavContainer>
  );
};

export default Navbar;
