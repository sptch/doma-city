import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import Layers from './Layers'
import { Zoom, Typography, Box, Button } from '@material-ui/core'
import { Close, Info, Layers as L } from '@material-ui/icons'
import { useRecoilState } from 'recoil'
import * as Atoms from './../Atoms'
import { useSpring, animated } from 'react-spring' 
import InfoPanel from './InfoPanel'

export default ()=>{

  const [layers] = useRecoilState(Atoms.tileLayers)
  const [legendData, setLegendData] = useRecoilState<any>(Atoms.legendData)

  const [open, setOpen ] = useState(false)
  const [legendOpen, setLegendOpen ] = useState(false)

  const pos:any = useSpring({
    from:{ translateX: 0 },
    to: open?{ translateX:0 }:{ translateX: 100 },
  })

  const posLegend:any = useSpring({
    from:{ translateX: 0 },
    to: open?{ translateX:0 }:{ translateX: 100 },
  })

  return (<>
    <animated.div 
      style={{
        transform: pos.translateX.interpolate((v:number)=>`translate(${v}%,0)`),
        position:'absolute',
        display: 'block',
        top: '1rem',
        boxShadow: "-15px 15px 15px rgba(0,0,0,0.2)",
        textAlign: 'left',
        bottom: '1rem',
        right: 0,
        paddingRight:'1rem',
        opacity: 0.85,
        zIndex: 2,
        overflowX: 'visible',
        borderRadius:'0.5rem',
        backgroundColor:'#eeeeee',
      }} 
      className="Dashboard">
      <div style={{        
        padding:'1.5rem',
        paddingTop:'1rem',
        overflowY:'scroll',
        position:'relative',
        borderRadius:'0.5rem', 
        height:'calc(100% - 3rem)'}}>
        <Box style={{position: 'relative', height:'fit-content', width: '100%'}}>
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <Typography variant="h5">
              Map Layers
            </Typography>
            <Button 
              onClick={()=>{
                console.log('click')
                setOpen(false)
              }} 
              style={{
                minWidth:'0.8rem',
                position:'relative', 
                marginLeft:'0.5rem', 
                marginRight:'-1rem'}}>
              <Close />
            </Button>
          </div>
          {layers && <Layers />}
        </Box>
      </div>
      <InfoPanel {...{open, setOpen}} />
      <animated.div style={{
        borderRadius:'0.5rem', 
        backgroundColor:'#eeeeee',
        position:'absolute', 
        bottom: 0,
        zIndex:3,
        left: '-1rem',
        boxShadow: "-15px 15px 15px rgba(0,0,0,0.2)",
        transform: pos.translateX.interpolate((v:number)=>`translate(-100%, ${((100-v)/100)*3.3}rem)`)}}>
        <Button 
          onClick={()=>{
            console.log('click bla')
            setOpen(true)
          }} 
          style={{
            minWidth:'0.8rem'}}>
          <L />
        </Button>
      </animated.div>
    </animated.div>
  </>);
}