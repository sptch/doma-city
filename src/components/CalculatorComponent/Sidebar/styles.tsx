import styled, { css } from 'styled-components';

export const
Wrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  min-width: 400px;
  max-width: 450px;
  width: 33vw;
  background-color: black;
  border-right: solid 1px rgba(255,255,255,0.3);
  box-shadow: 15px 0px 30px rgba(0,0,0,0.1);
  color: #999;
  overflow-x: visible;
  box-sizing: border-box;
`,

Container = styled.div`
  overflow-y: scroll;
  padding: 4rem 4rem;
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  flex-direction: column;
`,

SlidersBlock = styled.div`
  width: 100%; 
  margin: 1.5rem 0; 
  padding-top: 2.5rem; 
  box-sizing: border-box;
`,

Number = styled.div`
  color: #aa624f;
`