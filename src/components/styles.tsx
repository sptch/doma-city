import styled, { css } from 'styled-components';
import YouTubeComponent from "react-youtube";

export const
Content = styled.main`
  >section {
    background-size: cover;
    background-position: center;
    overflow: hidden;
    position: relative;
  }

  >svg{
    width:100%;
    height: auto;
    margin:	0 0 15px;
  }
`,

Section = styled.section<{bg:string}>`
  background-image: url(${p=>p.bg});
  min-height: 100vh;
  width: 100%;
`,

Video = styled.video.attrs<{width:number, height:number}>({
  autoPlay: true,
  muted: true,
  loop: true
})`
  position: absolute;
  object-fit: cover;
  height: 100%;
`,

TextStyle = css<{}>`
  color: #fff;
  position: relative;
  width: 100%;
  min-height: 100vh;
  min-width: 600px;
  display: flex;
  align-items: center;
  padding: 50px;
  >div{
    width: 42%;
    z-index: 1;
    h2{
      margin: 0 0 15px;
      font-size: 32px;
      font-weight: normal;
      font-family: 'Post Grotesk Medium';
    }
    p{
      font-family: 'Post Grotesk Light', Helvetica, sans-serif;
      font-size: 21px;
      font-weight: lighter;
    }
  }
`,

Text = styled.div`
  ${TextStyle}
  >div{
    width: calc(100% - 10rem);
  }
`,

TextLeft = styled.div`
  justify-content: start;
  ${TextStyle}
`,

TextRight = styled.div`
  justify-content: end;
  text-align: center;
  ${TextStyle}
  a{
    text-decoration: underline;
  }
  input {
    margin-right: 10px;
    margin-bottom: 5px;
    color: #333;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    font-family: inherit;
    font-size: 18px;
    padding: 10px;
    outline: none !important;
    border-radius: 5px;
  }
  button {
    color: #FFF;
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-size: 18px;
    padding: 10px;
    outline: none !important;
    border-radius: 5px;
  }
`,

Player = styled.div`
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: relative;
  display: flex;
  height: 0;
  width: 0;
  /* transform: translateX(-50%); */
  margin: 50vh 50vw;
  >div{
    >a{
      >img{
        height: 80;
        width: 80;
        cursor: pointer;
      }
    }
  }
`,

YouTube = styled(YouTubeComponent)`
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 2;
`,

Close = styled.div.attrs({
  children: '✖'
})`
  position: fixed;
  top: 1rem;
  right: 0.6rem;
  z-index: 3;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`
