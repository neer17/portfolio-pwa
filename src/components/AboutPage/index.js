import React from "react";
import Container from "./style/Container";
import ImageContainer from "./style/ImageContainer";
import TextContainer from "./style/TextContainer";
import AbImage from "../../assets/aboutme.svg";

const AboutPage = () => {
  return (
    <Container>
      <ImageContainer>
        <img src={AbImage} alt="About Page" />
      </ImageContainer>
      <TextContainer>
        <div>
          <h1>About Me</h1>
          <p>
            Hello I'm Neeraj Sewani, A full stack developer. I have serious
            passion for creating fully functional web applications with
            intuitive user interface. Currently I'm working on cool stuff like
            Progressive Web App (PWA), Service Workers, Push Notification etc.
          </p>
          <a
            href="https://drive.google.com/file/d/1UPRKFzvOug5HDWBCVul15ZUgnAx07GA1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume{" "}
            <svg
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="24px"
              height="24px"
            >
              <path
                fill="#fff"
                d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
              ></path>
            </svg>
          </a>
        </div>
      </TextContainer>
    </Container>
  );
};

export default AboutPage;
