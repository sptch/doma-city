import React from 'react';
import { Button } from '@material-ui/core'
import { Layers } from '@material-ui/icons'
import { animated } from 'react-spring' 


export default function LayersButton ({pos, open, setOpen}:any) {

  return  <animated.div 
  className="LayersButton"
  style={{
    borderRadius:'0.5rem', 
    backgroundColor:'#081217',
    position:'absolute', 
    bottom: '1rem',
    zIndex:3,
    left: '-1rem',
    boxShadow: "-15px 15px 15px rgba(0,0,0,0.2)",
    transform: pos.translateX.interpolate((v:number)=>`translate(-100%, ${((100-v)/100)*3.3}rem)`)}}>
  <Button 
    onClick={()=>{
      setOpen(true)
    }} 
    style={{
      minWidth:'0.8rem'}}>
    <Layers />
  </Button>
</animated.div>
}