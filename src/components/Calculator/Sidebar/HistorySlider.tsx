import { Typography } from "@material-ui/core"
import { useState } from "react"
import { useRecoilState } from "recoil"
import { atoms } from 'misc'
import { StyledSlider } from "./Slider"


export default function SliderStyled (){
  const [ marks ] = useState([...new Array(16)].map((v,i)=>({value: 2005+i})))
  const [ year, setYear ] = useRecoilState(atoms.year)

  console.log()
  return (<div>
    <div >
      <StyledSlider 
        aria-label="History Slider" 
        marks={marks} 
        valueLabelDisplay="on" 
        max={2020}
        min={2005}
        value={year}
        onChange={(e:any)=>setYear(e?.target.value||2020)}
      />
    </div>
  </div>)
}
