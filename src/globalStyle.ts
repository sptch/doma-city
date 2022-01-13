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

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #a90000;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /*
  Sidebar wrapper styles
  Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
  */
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;