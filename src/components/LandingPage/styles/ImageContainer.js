import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const WidthAnimation = keyframes`
    100% { transform: translate3d(0px, 0px, 0px); opacity: 1; };
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vw;
  height: 70vh;
  & > img {
    width: 40vw;
    opacity: 0;
    transform: translate3d(0px, 20px, 0px);
    animation: ${WidthAnimation} 0.7s forwards;
    @media (max-width: 670px) {
      width: 350px;
    }
  }
  @media (max-width: 670px) {
    width: 100vw;
    height: 40vh;
  }
  @media (max-height: 650px) {
    min-height: 250px !important;
    align-items: flex-start;
  }
`;

export default ImageContainer;
