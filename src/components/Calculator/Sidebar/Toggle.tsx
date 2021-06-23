import { Typography, Slider } from "@material-ui/core"
import { withStyles } from "@material-ui/styles"
import { atoms } from "misc";
import { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import { useRecoilState } from "recoil";


export default function Toggle(){
  const [hovered, setHovered] = useState(false)
  const [mode, setMode] = useRecoilState(atoms.mode)

  const { left } = useSpring({left: mode==='rent'?'calc( 0% - 0rem )':'calc( 100% - 1.8rem )'})
  const { opacity } = useSpring({opacity: hovered?'1':'0'})

  return (
    <div style={{display:'flex', cursor:'pointer', position:'relative', flexDirection:'row', flexBasis:'9rem', justifyContent:'space-between', alignItems:'center'}}>
      <Typography variant='body2'>
        Rent
      </Typography>
      <div onPointerOver={()=>setHovered(true)} onPointerLeave={()=>setHovered(false)} onClick={()=>setMode(mode==='rent'?'sale':'rent')} style={{width:'4rem',position:'relative', height:'1.8rem', borderRadius:'0.9rem', border:'solid 1px white'}}>
        <a.div style={{backgroundColor:'rgba(255,255,255,0.2)', opacity, transform: 'translate(-0.5rem, -0.5rem)', position:'absolute', height:'2.4rem', width:'2.4rem', borderRadius:'1.2rem', margin:'0.2rem', left}}/>
        <a.div style={{backgroundColor:'white', position:'absolute', height:'1.4rem', width:'1.4rem', borderRadius:'0.7rem', margin:'0.2rem', left}}/>
      </div>
      <Typography variant='body2'>
        Sale
      </Typography>
    </div>
  )
}