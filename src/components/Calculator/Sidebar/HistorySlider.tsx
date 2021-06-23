import { Typography } from "@material-ui/core"
import { useState } from "react"
import { useRecoilState } from "recoil"
import { atoms } from 'misc'
import { StyledSlider } from "./Slider"

const BoxShadowInactive =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)'
const BoxShadowActive = 
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)'

export default function SliderStyled (){
  const [ marks ] = useState([...new Array(16)].map((v,i)=>({value: 2005+i})))
  const [ year, setYear ] = useRecoilState(atoms.year)

  console.log()
  return (<div>
    <div >
      <StyledSlider 
        aria-label="History Slider" 
        marks={marks} 
        valueLabelDisplay="off" 
        max={2020}
        min={2005}
        value={year}
        onChange={(e:any)=>setYear(e?.target.value||2020)}
      />
    </div>
    <div style={{color:'white', display:'flex', justifyContent:'space-between', flexBasis:'100%'}}>
      {marks.map((v,key)=><Typography {...{key}} variant='body2' style={{fontSize:'0.5rem', writingMode: 'vertical-rl', transform:'rotate(225deg)'}}>{v.value}</Typography>)}
    </div>
  </div>)
}
