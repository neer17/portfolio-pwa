import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  flex-direction: column;
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fontColor};
  & > div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px 0 20px 0;
  }
  & > h2 {
    text-align: center;
  }
`;

export default Container;
