import styled, { css } from 'styled-components/macro';

export const
Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: white;
  box-shadow: 0px 3px 3px rgba(0,0,0,0.1);
  box-sizing: border-box;
  height: 120px;
  color: black !important;
  z-index: 2;
`,

Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  color: black !important;
  div> div> h2,h3,p{
    color: black !important;
  }
`,

SlidersBlock = styled.div`
  /* width: 100%;  */
  margin: 1.5rem 1rem 1rem 4.5rem; 
  box-sizing: border-box;
  color: black !important;
`,

Number = styled.span`
  color: #aa624f;
  font-weight: 600;
`,

SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  >h4{
    margin: 0 0 0 15px;
    width: 55px;
    padding: 0;
    text-align: center;
  }
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
            font-size: 18px;
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