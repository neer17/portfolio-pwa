import React from "react";
import ErrorImg from "../../assets/errorpage.svg";
import Container from "./styles/Container";

const ErrorPage = () => {
  return (
    <Container>
      <img src={ErrorImg} alt="404" />
      <h2>
        Are You Lost? Click{" "}
        <a href="/" rel="noopener noreferrer" aria-label="home">
          here
        </a>{" "}
        to go home. 🏠
      </h2>
    </Container>
  );
};

export default ErrorPage;
