import { Slider, Typography } from "@material-ui/core"
import { withStyles } from '@material-ui/styles'
import { useRecoilState } from "recoil"
import { atoms } from 'misc'
import { StyledSlider } from "./Slider"

const BoxShadowInactive =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)'
const BoxShadowActive = 
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)'

export default function SliderStyled (){
  const [ income, setIncome ] = useRecoilState(atoms.income)

  return (<div>
    <div >
      <StyledSlider 
        aria-label="Income Slider" 
        valueLabelDisplay="off" 
        max={1}
        min={0}
        step={0.00000001}
        value={income}
        onChange={(e:any)=>setIncome(e?.target.value||0)}
      />
    </div>
    <div style={{color:'white', display:'flex', justifyContent:'space-between', flexBasis:'100%'}}>
      <Typography variant='body2' style={{fontSize:'0.5rem'}}>
        Minimal
      </Typography>
      <Typography variant='body2' style={{fontSize:'0.5rem'}}>
        Average
      </Typography>
      <Typography variant='body2' style={{fontSize:'0.5rem'}}>
        High
      </Typography>

    </div>
  </div>)
}

