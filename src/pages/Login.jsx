import { ErrorMessage, Field, Form, Formik } from "formik";
import background from "../assets/login/login.jfif";

import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import { login } from "../redux/apiCalls";
import styled from "styled-components";
import { useNavigate } from "react-router";
import * as YUP from "yup";
import { large } from "../responsive";
import { useDispatch, useSelector } from "react-redux";

//styled comp
const Container = styled.div`
  background-image: url(${background});
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  background-position: 55% 30%;
  ${large({ display: "flex", justifyContent: "center", alignItems: "center" })}
`;
const OuterContainer = styled.div`
  height: 25rem;
  width: 25rem;
  background-color: transparent;
  position: relative;
  top: 23%;
  left: 55%;
  box-sizing: border-box;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  ${large({ position: "relative", top: "0", left: "0" })}
`;
const Brand = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
  color: #444;
`;
const FormContainer = styled.div`
  background-color: white;
  padding: 14px;
  margin-top: 1rem;
`;
const Input = styled(Field)`
  height: 2rem;
  margin: 1rem 0;
`;
const Error = styled.div`
  color: red;
  font-size: 0.8rem;
  margin: 0;
`;
const Para = styled.p`
  cursor: pointer;
  display: inline-block;
  color: #e46acf;
`;
const Forget = styled.div`
  text-align: end;
`;
const Button = styled.button`
  border: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
    rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  background-color: #464141;
  color: white;
  border-radius: 7px;
  padding: 10px 30px;
  cursor: pointer;
  margin: 1rem;
  transition: 0.3s ease;
  font-weight: 700;

  &:hover {
    background-color: #000;
    color: #fff;

    box-shadow: rgb(38, 57, 77) 0px 20px 20px -10px;
  }
`;
const Invalid = styled.div`
  color: red;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Login = () => {
  const history = useNavigate();
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  if (user.currentUser) {
    console.log(user.currentUser.isAdmin); // is admin or not ?
    if (user.currentUser.isAdmin) history("/adminHome");
    else history("/");
  }

  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);

  //schema
  const signInSchema = YUP.object().shape({
    email: YUP.string().required("Please Enter Email").email(),
    password: YUP.string().required("Please Enter Password"),
  });
  return (
    <Container>
      <OuterContainer>
        <Brand>MakeYouUp</Brand>

        <FormContainer>
          <div
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              fontWeight: "700",
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            Sign In
          </div>
          <hr />

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={signInSchema}
            onSubmit={(values, { resetForm }) => {
              console.log("in submit login");
              console.log(values);
              setLoading(true);
              login(dispatch, values);
              resetForm();
              setLoading(false);

              // setLoading(true);

              resetForm(); //reset inputs after submit
            }}
          >
            {() => {
              return (
                <Form>
                  <div className="form-group">
                    <Input
                      type="text"
                      placeholder="Email..."
                      className="form-control"
                      id="email"
                      name="email"
                    />
                    <Error>
                      <ErrorMessage name="email" />
                    </Error>
                  </div>
                  <div className="form-group">
                    <Input
                      type="text"
                      placeholder="Password"
                      className="form-control"
                      id="password"
                      name="password"
                    />
                    <Error>
                      <ErrorMessage name="password" />
                    </Error>
                  </div>
                  <Forget className="text-end">
                    <Link
                      to="/forget"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Para>forget Password?</Para>
                    </Link>
                  </Forget>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    {loading && (
                      <>
                        <Loader
                          type="Bars"
                          color="#adb4ec"
                          height={30}
                          width={30}
                        />
                      </>
                    )}
                  </div>
                  <div className="text-center">
                    {error && <Invalid>Invalid UserName/Password</Invalid>}
                    <Button type="submit">Log In</Button>
                  </div>

                  <div className="text-center">
                    <Link
                      to="/register"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Para>New Here? Create Account</Para>
                    </Link>
                  </div>
                  <div style={{ lineHeight: "3px", color: "grey" }}>
                    <p>For Testing ,Please Use below credentials</p>
                    <p>
                      <b>User</b>: test@gmail.com <b>Password</b>:test123
                    </p>
                    <p>
                      <b>Admin</b>: admin@gmail.com <b>Password</b>:admin123
                    </p>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </FormContainer>
      </OuterContainer>
    </Container>
  );
};

export default Login;
