import { animated } from 'react-spring';
import styled from 'styled-components/macro';


export const
Wrapper = styled.div`
  display: flex; 
  cursor: pointer; 
  position: absolute; 
  bottom: -1rem;
  transform: translateY(100%);
  right: 1rem;
  flex-direction: row; 
  flex-basis: 2rem; 
  justify-content: space-between; 
  align-items: center;
  max-width: 12rem;
  color: black !important;
  background-color: #fff;
  padding: 0.8rem;
  height: 2.5rem;
  border-radius: 3px;
  box-shadow: rgba(0,0,0,0.1) 3px 3px 3px;
  z-index: 0;
`,

ToggleComponent = styled.div`
  margin:0 0.5rem;
  width: 2.6rem;
  position: relative; 
  height: 1.4rem; 
  border-radius: 0.7rem; 
  border: solid 0.1px rgba(0,0,0,0.1);
  box-shadow:rgba(0,0,0,0.1) 0px 0px 20px;
  box-sizing: border-box;
  background-color: #aaa;
  color: black !important;

`,

HandleOutline = styled(animated.div)`
  background-color: rgba(1,1,1,0.2); 
  transform: translate(-3px, -3px); 
  position: absolute; 
  height: 20px; 
  width: 20px; 
  border-radius: 10px; 
  margin: 0.25rem; 
  color: black !important;

`,

Handle = styled(animated.div)`
  background-color: black; 
  position: absolute; 
  height: 14px; 
  width: 14px; 
  border-radius: 7px; 
  margin: 0.25rem; 
  color: black !important;

`