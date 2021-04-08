import styled from "@emotion/styled";

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
    flex-direction: column;
  }
  @media (max-height: 670px) {
    height: 600px;
  }
`;

export default Container;
