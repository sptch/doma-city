import { Typography, Slider, withStyles } from "@material-ui/core";
import { atoms } from "misc";
import { useRecoilState } from "recoil";
import Toggle from "./Toggle";
import HistorySlider from "./HistorySlider"
import IncomeSlider from "./IncomeSlider"
import { RentChart, SaleChart } from "./Charts"
import { useComponentSize } from "react-use-size"

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
    backgroundColor: '#081217',
    borderRight: 'solid rgba(255,255,255,0.3) 1px',
    boxShadow: '15px 0px 20px rgba(0,0,0,0.5)',
    padding: '2rem 2rem',
    overflow:'auto'
  }}>
    <Typography variant='h6'>
      Housing affordability calculator
    </Typography>
    <div style={{marginTop:'1rem', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <Typography variant='body2'>
        Choose mode:
      </Typography>
      <Toggle/>
    </div>
    <div {...{ref}} style={{width:'100%', position:'relative', marginTop: '1.5rem', minHeight:'350px', maxHeight:'450px', border:'solid rgba(255,255,255,0.6) 1px', height: 'calc( 33vw - 4rem)'}}>
      {mode==='rent'?
        <RentChart {...{height, width}}/>:
        <SaleChart {...{height, width}}/>
      }
    </div>
    <div style={{width:'100%', marginTop: '1.5rem', padding: '1rem', paddingTop:'1.5rem', boxSizing:'border-box', border:'solid rgba(255,255,255,0.6) 1px', height: '8rem'}}>
      <Typography variant='body2'>
        Choose the year:
      </Typography>
      <HistorySlider/>
    </div>
    <div style={{width:'100%', marginTop: '1.5rem', padding: '1rem', paddingTop:'1.5rem', boxSizing:'border-box', border:'solid rgba(255,255,255,0.6) 1px', height: '8rem'}}>
      <Typography variant='body2'>
        Choose the level of monthly income:
      </Typography>
      <IncomeSlider/>
    </div>
  </div>
}


