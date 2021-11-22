import React from "react";
import styled from "styled-components";
import background from "../assets/login/login.jfif";
import * as YUP from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { large } from "../responsive";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { publicRequest } from "../axiosMethod";

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

const ResetPassword = () => {
  const [info, setInfo] = React.useState("");
  const param = useParams();
  const id = param.id;
  const token = param.token;

  console.log("id: ", id);
  console.log("token:", token);

  const resetSchema = YUP.object().shape({
    password: YUP.string()
      .required("Please Enter password...")
      .min(6, "Password should be more than 5"),

    confirmPassword: YUP.string()
      .required()
      .oneOf([YUP.ref("password"), null], "Password should be match"),
  });
  return (
    <Container>
      <OuterContainer>
        <Brand>MakeYouUp</Brand>
        <FormContainer>
          <div style={{ textAlign: "center", fontSize: "1.5rem" }}>
            Reset Password
          </div>
          <hr />
          <Formik
            initialValues={{
              password: "",
              confirmPassword: "",
            }}
            validationSchema={resetSchema}
            onSubmit={async (values, { resetForm }) => {
              console.log(values);

              try {
                const response = await publicRequest.post(
                  `/auth/verifyAndUpdatePassword/${id}/${token}`,
                  {
                    password: values.password,
                  }
                );
                console.log(response);

                setInfo("Please log in again with the new password");
                resetForm();
              } catch (err) {
                setInfo("Something went wrong");
                console.log(err.message);
              }
            }}
          >
            {() => {
              return (
                <Form>
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
                  <div className="text-center">
                    <Button type="submit">Change Password</Button>
                  </div>
                  <p className="text-dark">{info}</p>
                  <div className="text-start">
                    <Link to="/login">
                      {" "}
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

export default ResetPassword;
