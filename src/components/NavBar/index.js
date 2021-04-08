import React from "react";
import { Link } from "@reach/router";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const Container = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  background: ${(props) => props.theme.bg};
`;
const MenuButtonDiv = styled.div`
  z-index: 100;
`;
const MenuButton = styled.svg`
  font-size: 25px;
  margin: 30px;
  cursor: pointer;
  fill: #939396;
  /* &:hover {
    color: ${(props) => props.theme.accentColor};
  } */
`;

const HeaderList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  display: flex;
  width: 40vw;
  height: 10vh;
  left: 50vw;
  @media (max-width: 768px) {
    display: none;
  }
`;
const ListItem = styled.li`
  list-style: none;
  display: inline;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  color: ${(props) => props.theme.fontColor};
  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;
const ThemeIcon = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 6vw;
  /* width: 10vw; */
  height: 10vh;
`;

const Svg = styled.svg`
  margin: 30px;
  cursor: pointer;
  fill: #f1c40f;
  /* &:hover {
    fill: ${(props) => props.theme.accentColor};
  } */
`;

const WidthAnimation = keyframes`
    100% { width: 100vw; };
`;

const MenuListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  width: 0vw;
  height: 100vh;
  z-index: 10;
  background-color: black;
  animation: ${WidthAnimation} 0.5s forwards;
`;

const UnorderedItem = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0px;
`;

const MenuListItem = styled.li`
  padding: 40px;
  font-size: 25px;
  height: 50px;
  cursor: pointer;
  color: white;
  list-style: none;
  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
  @media (max-width: 400px) {
    padding: 20px;
  }
`;

const NavBar = (props) => {
  return (
    <Container>
      <MenuButtonDiv onClick={props.NavBarClickHandler}>
        {props.open ? (
          <MenuButton
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512"
            width="26px"
            height="26px"
          >
            <path
              fill="#fff"
              d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            ></path>
          </MenuButton>
        ) : (
          <MenuButton
            aria-hidden="true"
            focusable="false"
            data-icon="bars"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="26px"
            height="26px"
          >
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
          </MenuButton>
        )}
      </MenuButtonDiv>
      <HeaderList>
        <Link to="/" style={{ textDecoration: "none" }}>
          <ListItem>Home</ListItem>
        </Link>
        <Link to="/blogs" style={{ textDecoration: "none" }}>
          <ListItem>Blogs</ListItem>
        </Link>
        <Link to="/projects" style={{ textDecoration: "none" }}>
          <ListItem>Projects</ListItem>
        </Link>
      </HeaderList>
      <ThemeIcon onClick={props.ThemeHandler}>
        {props.isDarkTheme ? (
          <Svg
            aria-hidden="true"
            focusable="false"
            data-icon="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="26px"
            height="26px"
          >
            <path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path>
          </Svg>
        ) : (
          <Svg
            aria-hidden="true"
            focusable="false"
            data-icon="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="26px"
            height="26px"
          >
            <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path>
          </Svg>
        )}
      </ThemeIcon>
      {props.open ? (
        <MenuListContainer>
          <UnorderedItem onClick={props.NavBarClickHandler}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <MenuListItem>Home</MenuListItem>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <MenuListItem>About</MenuListItem>
            </Link>
            <Link to="/blogs" style={{ textDecoration: "none" }}>
              <MenuListItem>Blogs</MenuListItem>
            </Link>
            <Link to="/projects" style={{ textDecoration: "none" }}>
              <MenuListItem>Projects</MenuListItem>
            </Link>
          </UnorderedItem>
        </MenuListContainer>
      ) : null}
    </Container>
  );
};

export default NavBar;
