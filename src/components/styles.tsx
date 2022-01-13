import styled, { css } from 'styled-components/macro';
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

CalculatorWrapper = styled.div`
  display: flex;
  flex-direction: ${p=>p.theme.layout==='desktop'? 'row':'column'};
  max-height: ${p=>p.theme.layout==='mobile'? '100vh':'unset'};
  width: 100%;
  min-height: 100vh;
  position: relative;
`,

MapWrapper = styled.div`
  position: relative;
  ${p=>p.theme.layout==='desktop' && css`min-height: 100vh;`}
  flex: 1 1 auto;
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
  min-height: ${p=>p.theme.layout==='desktop'?'100vh': 'calc(100vh)'};
  display: flex;
  align-items: ${p=>p.theme.layout==='desktop'?'center': 'center'};
  padding: ${p=>p.theme.layout==='desktop'?'50px': '50px'};
  >div{
    ${p=>p.theme.layout==='desktop' && css`width: 42%;`}
    z-index: 1;
    display: flex;
    flex-direction: column;
    h2{
      margin: 0 0 15px;
      font-size: 28px;
      font-weight: normal;
      font-family: 'Post Grotesk Medium';
    }
    p{
      font-family: 'Post Grotesk Light', Helvetica, sans-serif;
      font-size: ${p=>p.theme.layout==='desktop'?'18px': '16px'};
      font-weight: lighter;
      ${p=>p.theme.layout==='mobile' ? css`margin: 0.6rem 0;`: css`margin: 1rem 0;`}

    }
  }
  a{
    text-decoration: underline;
    font-size: ${p=>p.theme.layout==='desktop'?'18px': '16px'};

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
    &:hover{
      background-color: rgba(0, 0, 0, 0.4);
    }
    transition: background-color 0.2s ease-in-out;
  }
`,

Text = styled.div`
  ${TextStyle}
  ${p=>p.theme.layout==='mobile'&&css`pointer-events: none;`}
  a{
    pointer-events: all;
  }
  >div{
    width: 100%;
  }
`,

TextLeft = styled.div`
  justify-content: start;
  ${TextStyle}
  #explore{
    justify-self: center;
    width: 100%;
    button{
      width: 100%;
      font-family: 'Post Grotesk Medium';
    }
  }
`,

TextRight = styled.div`
  justify-content: end;
  text-align: center;
  ${TextStyle}
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
`,

BurgerWrapper = styled.div`
  position: fixed;
  top: 24px;
  left: 12px;
  z-index: 3;
  padding: 2px 2px 0 2px;
`,

Menu = styled.div<{open:boolean}>`
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 4;
  width: 75vw;
  max-width: 350px;
  height: 100vh;
  background-color: rgba(59, 59, 59, 0.712); 
  padding: 8.5rem 1rem;
  box-sizing: border-box;
  transition: transform 0.2s ease-in-out;
  ${p=>p.open ?
    css`transform: translateX(0);`:
    css`transform: translateX(-100%);`}
  /* color: #333; */
  display: flex;
  flex-direction: column;
  justify-content: start;

  >nav {
    height: 12rem;
    >ul {
      list-style-type: none;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: space-between;
      >li {
        margin: 0.5rem 0;
        >a{ 
          /* color: #333;  */
        }
      }
    }
  }
`
