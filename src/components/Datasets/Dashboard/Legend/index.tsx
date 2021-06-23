import React, { useState, useRef, useEffect } from 'react'
import { animated, useSpring } from 'react-spring'
import { Layers as LayersIcon, Info } from '@material-ui/icons'
import { Zoom, Fade, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
import { atoms } from 'misc'
import { useRecoilState } from 'recoil'
import Legend from './Legend'


export default function LegendMenu () {
  const [legendData, setLegendData] = useRecoilState<any>(atoms.legendData)
  const [layers] = useRecoilState(atoms.tileLayers)
  const [open, setOpen] = useState(false)

  const openSpring:any = useSpring({
    from: {maxWidth:'2.5rem', maxHeight: 'calc(0vh - -2.2rem)'},
    to: open? {maxWidth:'25rem', maxHeight: 'calc(100vh - 3rem)'}:{maxWidth:'2.5rem', maxHeight: 'calc(0vh - -2.2rem)'}
  })

  return <Zoom in={!(Object.values(layers).every(v=>v===false))} >
    <div className="Legend" style={{
      borderRadius:'0.5rem', 
      position:'absolute', 
      bottom: '1rem',
      zIndex:3,
      left:'-1rem'
    }}>
      <animated.div 
        onClick={()=>setOpen(!open)}
        style={{
          ...openSpring,
          borderRadius:'0.5rem', 
          backgroundColor:'#081217',
          boxShadow: "-15px 15px 15px rgba(0,0,0,0.2)",
          zIndex:3,
          transform:'translate(-100%,0)',
          border: 'solid 2px rgba(255,255,255,0.6)'
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
    </div>
  </Zoom>
}

