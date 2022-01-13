import styled, { css } from 'styled-components/macro';

export const
Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  color: black !important;
  z-index: 3;
`,

Handle = styled.div`
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 35px;
  height:5px;
  border-radius: 2px;
  background-color: #999999;
`,

Gradient = styled.div`
  position: fixed;
  pointer-events: none;
  bottom: -1px;
  width: 100vw;
  height:55px;
  background: linear-gradient(to bottom, rgb(255 255 255 / 0%) 0%, rgb(255 255 255 / 100%) 90%);
`,

BottomBarPlaceholder = styled.div`
  position: relative;
  width: 100vw;
  height: 140px;
  background-color: #fff;
`,

Container = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  flex-direction: column;
  color: black !important;
  width: 100vw;
  min-height: 100vh;
  background-color: white;
  box-shadow: 0px -3px 3px rgba(0,0,0,0.1);
  >div{
    margin-top: 1.6rem;

  }
  div> div> h2,h3,p{
    color: black !important;
  }
`,

Number = styled.span`
  color: #aa624f;
  font-weight: 600;
`