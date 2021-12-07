import { createGlobalStyle } from 'styled-components';
import PostGroteskLight from 'assets/fonts/PostGrotesk-Light.woff2';
import PostGroteskMedium from 'assets/fonts/PostGrotesk-Medium.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'Post Grotesk Light';
    src: url(${PostGroteskLight}) format('woff2');
    font-style: normal;
  }

  @font-face {
    font-family: 'Post Grotesk Medium';
    src: url(${PostGroteskMedium}) format('woff2');
    font-style: normal;
  }

  * {
    font-family: 'Post Grotesk Light', sans-serif;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Post Grotesk Medium', sans-serif;
  }
  body, html {
    margin: 0;
    padding: 0;
    overflow: auto;
    position: relative;
    scroll-behavior: smooth;
  }

  a{
    text-decoration: none;
    color: #fff;
    font-family: 'Post Grotesk Light', Helvetica, sans-serif;
    font-size: 21px;
    font-weight: lighter;
    &:hover{
      text-decoration: underline;
    }
  }
`;