import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const WidthAnimation = keyframes`
    100% { transform: translate3d(0px, 0px, 0px); opacity: 1; };
`;

const BlogWrapper = styled.div`
  width: 25%;
  margin: 20px 20px;
  padding: 0 0 15px 0;
  background: ${(props) => props.theme.projectColor};
  box-shadow: 0 0 20px 0 ${(props) => props.theme.projectShadow};
  transition: box-shadow 500ms;
  word-wrap: break-word;
  border-radius: 10px;
  opacity: 0;
  transform: translate3d(0px, 20px, 0px);
  animation: ${WidthAnimation} 0.7s forwards;
  &:hover {
    box-shadow: 20px 20px 40px 20px ${(props) => props.theme.projectShadowHover};
  }
  & > div {
    padding: 0 15px 15px 15px;
  }
  & > span {
    display: inline-block;
    position: relative;
    background: ${(props) => props.theme.projectColor};
    border-top: 5px solid red;
    width: 100.5%;
    height: 20px;
    top: -15px;
    left: -1px;
    transform: rotate(3deg);
  }
  & > img {
    width: 100%;
    min-height: 180px;
    border-radius: 10px 10px 0 0;
  }
  & > div > h3 {
    margin: 0;
    padding: 0;
  }
  & > div > h5 {
    font-size: 12px;
    font-weight: 500;
    opacity: 0.8;
    color: ${(props) => props.theme.fontColor};
    margin: 10px 0 0 0;
    padding: 0;
    & > a {
      text-decoration: none;
      color: ${(props) => props.theme.accentColor};
    }
  }
  & > div > p {
    font-size: 14px;
    font-weight: 500;
    line-height: 23px;
    opacity: 0.9;
  }
  & > div > a {
    cursor: pointer;
    font-size: 13px;
    font-weight: 500;
    color: ${(props) => props.theme.accentColor};
    text-decoration: none;
  }
  @media (max-width: 1100px) {
    width: 40%;
  }
  @media (max-width: 600px) {
    width: 85%;
    box-shadow: 0 10px 50px 0 ${(props) => props.theme.projectShadowHover};
    /* text-align: center; */
  }
`;

export default BlogWrapper;
