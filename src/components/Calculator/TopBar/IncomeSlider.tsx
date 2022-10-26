import { useRecoilState } from "recoil"
import { atoms } from 'misc'
import { StyledSlider } from "./Slider"
import { format } from 'd3-format'
import { useEffect } from "react"
import { SliderWrapper } from "./styles"

const formatter = format(".3~s")
type Incomes = {
  year: number;
  median_income: number;
}[]

export default function SliderStyled ({medianIncomes:data}:{medianIncomes: Incomes}){
  const [ incomeAspect, setIncomeAspect ] = useRecoilState(atoms.incomeAspect)
  const [ income, setIncome ] = useRecoilState(atoms.income)
  const [ year ] = useRecoilState(atoms.year)

  useEffect(()=>{
    if(data && data.length>0){
      const v = incomeAspect
      setIncome(v<0?
        (data.find(d=>d.year===year)?.median_income||0)/Math.abs(v-1):
        (data.find(d=>d.year===year)?.median_income||0)*Math.pow(Math.abs(-v-1),4)
      )
    }
  },[incomeAspect, year, setIncome])

  return (
  <div>
    <SliderWrapper>
      <StyledSlider 
        aria-label="Income Slider" 
        valueLabelDisplay="off" 
        valueLabelFormat={(v)=>`$${formatter(income)}`}
        max={1}
        min={-1}
        step={0.00000001}
        value={incomeAspect}
        onChange={(e:any)=>setIncomeAspect(e?.target.value||0)}
      />
      <h4>{formatter(income)}</h4>
    </SliderWrapper>
  </div>)
}

