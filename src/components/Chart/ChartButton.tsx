import React from 'react';
import { Button } from '@material-ui/core'
import { BubbleChart } from '@material-ui/icons'
import { animated } from 'react-spring' 


export default function ChartButton ({pos, open, setOpen}:any) {

  return  <animated.div 
  className="ChartButton"
  style={{
    borderRadius:'0.5rem', 
    backgroundColor:'#081217',
    border: 'solid 2px rgba(255,255,255,0.6)',
    position:'absolute', 
    bottom: '0rem',
    zIndex:3,
    right: '-3.5rem',
    boxShadow: "-15px 15px 15px rgba(0,0,0,0.2)",
    transform: pos.translateX.interpolate((v:number)=>`translate(0, ${((100-v)/100)*3.5}rem)`)}}>
  <Button 
    onClick={()=>{
      setOpen(true)
    }} 
    style={{
      minWidth:'0.8rem'}}>
    <BubbleChart />
  </Button>
</animated.div>
}