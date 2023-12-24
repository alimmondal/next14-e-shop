import React from "react";
import FormWrap from "../components/FormWrap";
import LoginForm from "./LoginForm";
import Container from "../components/Container";

const Login = () => {
  return (
    <Container>
      <FormWrap>
        <LoginForm />
      </FormWrap>
    </Container>
  );
};

export default Login;
