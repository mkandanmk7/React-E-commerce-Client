import { ErrorMessage, Field, Form, Formik } from "formik";
import background from "../assets/login/login.jfif";

import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { useHistory } from "react-router";
import * as YUP from "yup";
import { large } from "../responsive";
import axios from "axios";

// style comp

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
  top: 13%;
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

const Para = styled.p`
  cursor: pointer;
  display: inline-block;
  color: #e46acf;
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
const Error = styled.div`
  color: red;
  font-size: 0.8rem;
  margin: 0;
`;

const Register = () => {
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);

  //schema
  const registerSchema = YUP.object().shape({
    username: YUP.string()
      .required("Please Enter UserName")
      .min(6, "Username length should be more than 5"),

    email: YUP.string().required("Please Enter Email").email(),
    password: YUP.string()
      .required("Please Enter Password")
      .min(6, "Password length should be more than 5"),
    confirmPassword: YUP.string()
      .required()
      .oneOf([YUP.ref("password"), null], "Password Should Match"),
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
            Sign Up
          </div>
          <hr />
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={registerSchema}
            onSubmit={async (values, { resetForm }) => {
              console.log("in submit register");
              setLoading(true);
              console.log(values);
              try {
                const { confirmPassword, ...other } = values;
                const res = await axios.post(
                  `https://muthu-ecommerce-server.herokuapp.com/auth/register`,
                  other
                );
                console.log(res);
                setInfo(
                  "User created Successfully,Please Login with your Email/Password "
                );
                setLoading(false);
                resetForm(); //clear inputs
              } catch (error) {
                setInfo("Email already exists");
                setLoading(false);
              }

              // setLoading(true);
            }}
          >
            {() => {
              return (
                <Form>
                  <div className="form-group">
                    <Input
                      type="text"
                      placeholder="UserName"
                      className="form-control"
                      id="username"
                      name="username"
                    />
                    <Error>
                      <ErrorMessage name="username" />
                    </Error>
                  </div>
                  <div className="form-group">
                    <Input
                      type="text"
                      placeholder="Email"
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
                      type="password"
                      placeholder="Password"
                      className="form-control"
                      id="password"
                      name="password"
                    />
                    <Error>
                      <ErrorMessage name="password" />
                    </Error>
                  </div>
                  <div className="form-group">
                    <Input
                      type="password"
                      placeholder="Confirm Password"
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                    />
                    <Error>
                      <ErrorMessage name="confirmPassword" />
                    </Error>
                  </div>
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
                    <Button type="submit">Sign Up</Button>
                  </div>
                  <div>
                    <p style={{ color: "orange" }}>{info}</p>
                  </div>
                  <div className="text-start">
                    <Link to="/login">
                      <Para>Back to login</Para>
                    </Link>
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

export default Register;
