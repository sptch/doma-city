import { useRecoilState } from "recoil"
import { atoms } from 'misc'
import { StyledSlider } from "./Slider"
import { format } from 'd3-format'
import { SalariesQuery, useSalariesQuery } from "generated"
import { useEffect } from "react"

const formatter = format(".3~s")

export default function SliderStyled ({salaries:data}:{salaries: SalariesQuery | undefined}){
  const [ incomeAspect, setIncomeAspect ] = useRecoilState(atoms.incomeAspect)
  const [ income, setIncome ] = useRecoilState(atoms.income)
  const [ year ] = useRecoilState(atoms.year)

  useEffect(()=>{
    if(data && data.incomes.length>0){
      const v = incomeAspect
      setIncome(v<0?
        data?.incomes.find(d=>d.year===year)?.income/Math.abs(v-1):
        data?.incomes.find(d=>d.year===year)?.income*Math.pow(Math.abs(-v-1),3)
      )
    }
  },[incomeAspect, year, setIncome])

  return (
  <div>
    <div >
      <StyledSlider 
        aria-label="Income Slider" 
        valueLabelDisplay="on" 
        valueLabelFormat={(v)=>`$${formatter(income)}`}
        max={1}
        min={-1}
        step={0.00000001}
        value={incomeAspect}
        onChange={(e:any)=>setIncomeAspect(e?.target.value||0)}
      />
    </div>
  </div>)
}

