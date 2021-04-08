import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const WidthAnimation = keyframes`
    100% { transform: translate3d(0px, 0px, 0px); opacity: 1; };
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 45vw;
  height: 100%;
  /* border: 2px solid black; */
  & > div {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 33vw;
    height: 100%;
    line-height: 30px;
  }
  & > div > h1 {
    opacity: 0;
    transform: translate3d(0px, 20px, 0px);
    animation: ${WidthAnimation} 0.5s forwards;
  }
  & > div > p {
    opacity: 0;
    transform: translate3d(0px, 20px, 0px);
    animation: ${WidthAnimation} 0.6s forwards;
  }
  & > div > a {
    color: #ffffff;
    background-color: ${(props) => props.theme.accentColor};
    padding: 10px 20px 10px 30px;
    border-radius: 50px;
    font-size: 16px;
    font-weight: 600;
    outline: none;
    border: none;
    cursor: pointer;
    margin-top: 30px;
    text-decoration: none;
    opacity: 0;
    transform: translate3d(0px, 20px, 0px);
    animation: ${WidthAnimation} 0.7s forwards;
    &:hover {
      background-color: #ee7f66;
      /* color: #0bceaf;
            transition: color 0.5 ease; */
      transition: background-color 0.5s ease;
    }
  }
  & > div > a > svg {
    margin: 0 10px;
  }
  @media (max-width: 670px) {
    width: 85vw;
    height: 50vh;
    align-items: center;
    text-align: center;
    padding: 0;
    & > div {
      align-items: center;
      width: 85vw;
      height: 50vh;
    }
  }
  @media (max-height: 670px) {
    height: 60vh;
  }
`;

export default TextContainer;
