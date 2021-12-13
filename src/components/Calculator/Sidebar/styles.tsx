import styled, { css } from 'styled-components/macro';

export const
Wrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  min-width: 450px;
  max-width: 500px;
  width: 33vw;
  background-color: rgba(100,101,101,0.8);
  border-right: solid 1px rgba(255,255,255,0.3);
  box-shadow: 15px 0px 30px rgba(0,0,0,0.1);
  overflow-x: visible;
  box-sizing: border-box;
  height: 100vh;
  overflow: scroll;

`,

Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`,

SlidersBlock = styled.div`
  width: 100%; 
  margin: 1.5rem 0; 
  padding-top: 2.5rem; 
  box-sizing: border-box;
`,

Number = styled.span`
  color: #ffacac;
  font-weight: 600;
`,

SliderWrapper = styled.div`
  >span{
    >span.MuiSlider-mark{
      visibility: hidden!important;
    }
    >span.MuiSlider-thumb{
      color: black;
      >span.MuiSlider-valueLabel{
        >span{
          >span{
            color: #fff;
            font-family: 'Post Grotesk Light', Helvetica, sans-serif;
            font-size: 21px;
            font-weight: lighter;

          }
        }
      }
    }
    >span.MuiSlider-rail{
      height: 5px!important;
      opacity: 1!important;
      transform: translate(0,-2px);
    }
  }
`