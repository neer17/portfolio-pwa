import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const WidthAnimation = keyframes`
    100% { transform: translate3d(0px, 0px, 0px); opacity: 1; };
`;

const GreetingDiv = styled.div`
  background: ${(props) => props.theme.accentColor};
  color: #ffffff;
  display: inline-block;
  padding: 0 30px;
  border-radius: 50px 50px 50px 0px;
  font-size: 16px;
  font-weight: 600;
  opacity: 0;
  transform: translate3d(0px, 20px, 0px);
  animation: ${WidthAnimation} 0.3s forwards;
  & > p {
    margin: 10px 5px;
    padding: 0;
  }
`;

export default GreetingDiv;
