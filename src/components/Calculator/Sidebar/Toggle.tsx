import { Typography, Slider } from "@material-ui/core"
import { withStyles } from "@material-ui/styles"
import { atoms } from "misc";
import { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import { useRecoilState } from "recoil";


export default function Toggle(){
  const [hovered, setHovered] = useState(false)
  const [mode, setMode] = useRecoilState(atoms.mode)

  const { left } = useSpring({left: mode==='rent'?'calc( 0% - 0rem )':'calc( 100% - 1.3rem )'})
  const { opacity } = useSpring({opacity: hovered?'1':'0'})

  return (
    <div style={{
      display:'flex', 
      cursor:'pointer', 
      position:'absolute', 
      top:'2rem',
      right: '-2rem',
      transform: 'translate(100%,0)',
      flexDirection:'row', 
      flexBasis:'9rem', 
      justifyContent:'space-between', 
      alignItems:'center',
      maxWidth:'8rem'
    }}>
      <Typography variant='body2' style={{color: mode==='rent'?'black':undefined}}>
        Rent
      </Typography>
      <div onPointerOver={()=>setHovered(true)} onPointerLeave={()=>setHovered(false)} onClick={()=>setMode(mode==='rent'?'price':'rent')} 
        style={{
          margin: '0 0.5rem',
          width:'2.6rem',
          position:'relative', 
          height:'1.4rem', 
          borderRadius:'0.7rem', 
          border:'solid 0.1px rgba(0,0,0,0.1)',
          boxShadow: 'rgba(0,0,0,0.3) 0px 0px 20px',
          boxSizing:'border-box',
          backgroundColor:'white'
        }}>
        <a.div style={{
          backgroundColor:'rgba(1,1,1,0.2)', 
          opacity, 
          transform: 'translate(-0.2rem, -0.2rem)', 
          position:'absolute', 
          height:'1.2rem', 
          width:'1.2rem', 
          borderRadius:'0.6rem', 
          margin:'0.25rem', 
          left
        }}/>
        <a.div style={{
          backgroundColor:'black', 
          position:'absolute', 
          height:'0.8rem', 
          width:'0.8rem', 
          borderRadius:'0.4rem', 
          margin:'0.25rem', 
          left
        }}/>
      </div>
      <Typography variant='body2' style={{color: mode==='price'?'black':undefined}}>
        Buy
      </Typography>
    </div>
  )
}