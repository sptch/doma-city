import { Typography } from "@material-ui/core"
import { atoms } from "misc";
import { useRecoilState } from "recoil";
import HistorySlider from "./HistorySlider"
import IncomeSlider from "./IncomeSlider"
import { useComponentSize } from "react-use-size"
import Toggle from "./Toggle";

export  default function Sidebar(){
  const [mode, setMode] = useRecoilState(atoms.mode)
  const { ref, height, width } = useComponentSize()

  return <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    minWidth:'350px',
    maxWidth:'450px',
    width: '33vw',
    backgroundColor: 'white',
    borderRight: 'solid rgba(255,255,255,0.3) 1px',
    boxShadow: '15px 0px 30px rgba(0,0,0,0.1)',
    color:'#999',
    overflowX:'visible',
    boxSizing:'border-box'
  }}>
    <Toggle/>
    <div style={{
      overflowY:'scroll',
      padding: '2rem 2rem',
      boxSizing:'border-box',
      height:'100vh'
    }}>
      <Typography variant='h6' style={{color:'black'}}>
      💸 Annual household income 
      </Typography>
      <div style={{width:'100%', margin: '1.5rem 0', padding: '1rem', paddingTop:'1.5rem', boxSizing:'border-box'}}>
        <IncomeSlider/>
        <Typography variant='body2' style={{margin:'1rem 0', color:'#999'}}>
          The map shows affordability of Vancouver areas, 
          in light of income selected above. 
          Methodology <a href='#' style={{color:'#999'}}>here</a>.
        </Typography>
        <HistorySlider/>
      </div>
      <Typography variant='h6' style={{color:'black'}}>
      🏠 Stance in the city 
      </Typography>
      <Typography variant='body2' style={{margin:'1rem 0', color:'#999'}}>
          - Average annual rent in Vancouver is $24,000, 
          which is 77.4% of selected annual household income.
      </Typography>
      <Typography variant='body2' style={{margin:'1rem 0', color:'#999'}}>
          - Finding affordable rental home for a housefold with such income is difficult.
      </Typography>
      <Typography variant='body2' style={{margin:'1rem 0', color:'#999'}}>
          - The maximum mortgage a household with selected annual household income can take is $217,700.
      </Typography>
    </div>
  </div>
}


