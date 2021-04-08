import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  flex-direction: column;
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fontColor};
  & > div {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  & > h2 {
    text-align: center;
  }
`;

export default Container;
