import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const WidthAnimation = keyframes`
    100% { transform: translate3d(0px, 0px, 0px); opacity: 1; };
`;

const SocialList = styled.ul`
  position: relative;
  list-style: none;
  margin: 40px 0 0 0;
  padding: 0;
  text-decoration: none;
  opacity: 0;
  transform: translate3d(0px, 20px, 0px);
  animation: ${WidthAnimation} 0.7s forwards;
  & > li {
    display: inline;
    margin: 0 30px 0 0;
    &:last-child {
      margin: 0;
    }
    & > a {
      font-size: 20px;
      text-decoration: none;
      & > svg {
        /* fill: #939396; */
        transform: scale(1);
        transition: all 0.3s ease;
        &:hover {
          transform: scale(1.3);
          /* fill: ${(props) => props.theme.accentColor}; */
        }
      }
    }
  }
`;

export default SocialList;
