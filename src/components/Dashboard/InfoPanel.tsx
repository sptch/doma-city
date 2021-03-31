import React, { useState, useRef, useEffect } from 'react'
import { animated, useSpring } from 'react-spring'
import { Layers as LayersIcon, Info } from '@material-ui/icons'
import { Zoom, Fade, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
import * as Atoms from 'components/Atoms'
import { useRecoilState } from 'recoil'
import Legend from './Legend'

function LayersButton () {
  const [open, setOpen] = useState(false)

  const openSpring:any = useSpring({
    from: {maxWidth:'2.5rem', maxHeight: 'calc(0vh - -2.2rem)'},
    to: open? {maxWidth:'25rem', maxHeight: 'calc(100vh - 3rem)'}:{maxWidth:'2.5rem', maxHeight: 'calc(0vh - -2.2rem)'}
  })

  return <animated.div 
    onClick={()=>setOpen(!open)}
    style={{
      ...openSpring,
      borderRadius:'0.5rem', 
      backgroundColor:'#eeeeee',
      boxShadow: "-15px 15px 15px rgba(0,0,0,0.2)",
      // transform: spring.translate.interpolate((v:any)=>`translate(0, ${v})`),
      zIndex:3,
      transform:'translate(-100%,0)'
    }}>
      <Zoom in={!open} >
        <Button 
          onClick={()=>{
            console.log('click')
            setOpen(false)
          }} 
          style={{ minWidth:'0.8rem',  bottom:0}}>
          <Info />
        </Button>
      </Zoom>
      <div style={{transform:'translate(2.5rem,0)'}}>
        <Fade in={open}>
            <div><Legend {...{setOpen}}/></div>
        </Fade>
      </div>
  </animated.div>
}

export default function LayersMenu ({open, setOpen}:any) {
  const [legendData, setLegendData] = useRecoilState<any>(Atoms.legendData)
  // const pos:any = useSpring({
  //   from:{ translateX: 0 },
  //   to: open?{ translateX:0 }:{ translateX: 100 },
  // })
  const [layers] = useRecoilState(Atoms.tileLayers)

  return <Zoom in={!(Object.values(layers).every(v=>v===false))} >
    <animated.div style={{
      borderRadius:'0.5rem', 
      position:'absolute', 
      bottom: 0,
      zIndex:3,
      left: '-1rem',
      // transform: pos.translateX.interpolate((v:number)=>`translate(-100%, calc(-100% + ${-1+((100-v)/100)*3.3}rem))`)
    }}>
        {/* <Button 
          onClick={()=>{
            console.log('click')
            setOpen(false)
          }} 
          style={{
            minWidth:'0.8rem'}}>
          <Info />
        </Button> */}
      <LayersButton />
    </animated.div>
  </Zoom>
}

