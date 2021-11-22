import React, { useState } from "react";
import styled from "styled-components";
import background from "../assets/login/login.jfif";
import * as YUP from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { large } from "../responsive";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import { publicRequest } from "../axiosMethod";

//styled comps
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
  ${large({ position: "relative", top: "0", left: "0" })}
`;
const Brand = styled.div`
  text-align: center;
  font-size: 2rem;
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

const ForgetPassword = () => {
  const [info, setInfo] = React.useState("");
  const [loading, setLoading] = useState(false);

  const forgetSchema = YUP.object().shape({
    email: YUP.string().required("Please enter your Email...").email(),
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
              confirmpassword: "",
            }}
            validationSchema={forgetSchema}
            onSubmit={async (values, { resetForm }) => {
              console.log("in submit forgot pass");
              setLoading(true);
              console.log(values);
              try {
                const res = await publicRequest.post("/auth/resettoken", {
                  email: values.email,
                });
                console.log(res.data);
                setInfo("Please check Your email for activation link");
                setLoading(false);
                resetForm();
              } catch (err) {
                setInfo("Email already exists");
                console.log(err);
                setLoading(false);
              }
            }}
          >
            {() => {
              return (
                <Form>
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
                    <Button type="submit">Send Link</Button>
                  </div>
                  <p>
                    Note: Please register with own Email account and proceed
                    with Reset Password in order to receive Activation Link{" "}
                  </p>
                  <h3 className="text-warning">{info}</h3>
                  <div className="text-start">
                    <Link to="/login">
                      <Para>Back to Login</Para>
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

export default ForgetPassword;
