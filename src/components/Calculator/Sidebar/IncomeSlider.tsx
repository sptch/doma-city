import { useRecoilState } from "recoil"
import { atoms } from 'misc'
import { StyledSlider } from "./Slider"
import { format } from 'd3-format'

const formatter = format(".3~s")

export default function SliderStyled (){
  const [ income, setIncome ] = useRecoilState(atoms.income)

  return (
  <div>
    <div >
      <StyledSlider 
        aria-label="Income Slider" 
        valueLabelDisplay="on" 
        valueLabelFormat={(v)=>`${formatter(v*100000)}`}
        max={1}
        min={0}
        step={0.00000001}
        value={income}
        onChange={(e:any)=>setIncome(e?.target.value||0)}
      />
    </div>
  </div>)
}

