import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const WidthAnimation = keyframes`
    100% { transform: translate3d(0px, 0px, 0px); opacity: 1; };
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35vw;
  height: 70vh;
  /* border: 2px solid black; */
  & > img {
    width: 100%;
    opacity: 0;
    transform: translate3d(0px, 20px, 0px);
    animation: ${WidthAnimation} 0.7s forwards;
    @media (max-width: 670px) {
      width: 80%;
    }
  }
  @media (max-width: 670px) {
    width: 100vw;
    height: 45vh;
  }
  @media (max-height: 670px) {
    height: 350px;
  }
`;

export default ImageContainer;
