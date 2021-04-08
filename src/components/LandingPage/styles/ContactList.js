import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const WidthAnimation = keyframes`
    100% { transform: translate3d(0px, 0px, 0px); opacity: 1; };
`;

const SocialList = styled.ul`
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 14px;
  & > li {
    margin: 10px 0 0 0;
    opacity: 0;
    transform: translate3d(0px, 20px, 0px);
    animation: ${WidthAnimation} 0.6s forwards;
    & > svg {
      margin: 10px 10px 0 0;
      fill: #939396;
    }
    & > a {
      text-decoration: none;
      color: ${(props) => props.theme.fontColor};
    }
    & > p {
      display: inline;
    }
  }
`;

export default SocialList;
