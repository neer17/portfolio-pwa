import styled from "@emotion/styled";
// import { keyframes } from "@emotion/core";

// const fadeInUp = keyframes`
//     0% {
//         opacity: 0;
//     };
//     100% {
//         opacity: 1;
//         transform: none;
//   };
// `;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100vw;
  height: 82.5vh;
  padding-bottom: 60px;
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fontColor};
  @media (max-width: 670px) {
    flex-direction: column-reverse;
  }
  @media (max-height: 700px) {
    min-height: 650px;
  }
`;

export default Container;
