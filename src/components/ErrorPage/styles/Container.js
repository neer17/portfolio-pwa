import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fontColor};
  width: 100%;
  height: 90vh;
  & > img {
    min-width: 300px;
    width: 40vw;
    margin-bottom: 50px;
    margin-top: 15vh;
  }

  & > h2 > a {
    text-decoration: none;
    color: ${(props) => props.theme.accentColor};
  }

  @media (max-width: 670px) {
    & > h2 {
      font-size: 18px;
    }
  }
`;

export default Container;
