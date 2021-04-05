import React, { useMemo, useState } from 'react';
import data from './data.json'
import {TextField, Select, MenuItem, InputLabel, Typography } from '@material-ui/core'
import Chart from './Chart'

const scale = (n:number, coeff:number)=>{
  return Math.pow(n, coeff)
}

export default function App ( props:any ) {

  const [year, setYear] = useState(2020)
  const [yAxis, setYAxis] = useState('price_to_rent_city_center')
  const [xAxis, setXAxis] = useState('price_to_annual_income')

  const [coeffX, setCoeffX] = useState(0.001)
  const [coeffY, setCoeffY] = useState(0.001)

  const plotData = useMemo(
    ()=>data
    .sort((a,b)=>a.city.localeCompare(b.city))
    .filter(({year:y})=>y===year)
    .map((d:any)=>({
      key: scale(d[xAxis], coeffX),
      data: scale(d[yAxis], coeffY),
      id: d.city,
      metadata: d
    })), [year, coeffX, coeffY, xAxis, yAxis]
  )

  const fields = Object.entries(plotData[0].metadata)
    .filter(([key,value]:any)=>!isNaN(value)&&key!=="year")
    .map(([key,value])=>key)

  const chartWidth = '35vw'

  return <div className="App" style={{width:'100%', height:'100%'}}>
    <div style={{
      width: chartWidth, 
      height: 'calc( 100vh - 2rem )', 
      zIndex: 2,
      position:'absolute',
      left: '1rem',
      top: '1rem',
      display: 'block',
      backgroundColor:'#081217',
      boxShadow: "-15px 15px 15px rgba(0,0,0,0.2)",
      textAlign: 'left',
      padding: '1rem',
      borderRadius: '0.5rem',
      minWidth: '66vh', 
      minHeight: '66vh',
      maxHeight: 'calc( 100vh - 4rem )',
    }}>
      <form noValidate autoComplete="off" style={{position:'absolute', top:'1rem',left:'3.5rem', display:'flex', textTransform: "capitalize", overflow:'hidden' }}>
        <div style={{display:'block'}}>
          <InputLabel id="Dataset" style={{fontSize:'0.8rem'}} >Dataset</InputLabel>
          <Select
            labelId="Dataset"
            id="Dataset"
            value={year}
            onChange={(event:any)=>{if(event.target.value && !isNaN(event.target.value)) setYear(event.target.value) }} 
            label="Dataset"
            variant="outlined"
          >
            {[...Array(12)].map((v,i) => <MenuItem key={i} value={i+2009}>{i+2009}</MenuItem>)}
          </Select>
        </div>
        <div style={{display:'block'}}>
          <InputLabel id="Year" style={{fontSize:'0.8rem'}} >Year</InputLabel>
          <Select
            labelId="Year"
            id="Year"
            value={year}
            onChange={(event:any)=>{if(event.target.value && !isNaN(event.target.value)) setYear(event.target.value) }} 
            label="Year"
            variant="outlined"
          >
            {[...Array(12)].map((v,i) => <MenuItem key={i} value={i+2009}>{i+2009}</MenuItem>)}
          </Select>
        </div>
        <div style={{display:'block'}}>
          <InputLabel id="Y-axis" style={{fontSize:'0.8rem'}} >Y-axis</InputLabel>
          <Select
            style={{marginLeft:'0.5rem'}}
            labelId="Y-axis"
            id="Y-axis"
            value={yAxis}
            onChange={(event:any)=>{setYAxis(event.target.value) }} 
            label="Y-axis"
            variant="outlined"
          >
            {fields.filter((d)=>d!==xAxis).map((v,i) => <MenuItem style={{textTransform: "capitalize"}} key={i} value={v}>{v.replaceAll('_', ' ')}</MenuItem>)}
          </Select>
        </div>
        
        <div style={{display:'block'}}>
          <InputLabel id="X-axis" style={{fontSize:'0.8rem'}} >X-axis</InputLabel>
          <Select
            style={{marginLeft:'0.5rem'}}
            labelId="X-axis"
            id="X-axis"
            value={xAxis}
            onChange={(event:any)=>{setXAxis(event.target.value) }} 
            label="X-axis"
            variant="outlined"
          >
            {fields.filter((d)=>d!==yAxis).map((v,i) => <MenuItem style={{textTransform: "capitalize"}} key={i} value={v}>{v.replaceAll('_', ' ')}</MenuItem>)}
          </Select>
        </div>
        <div style={{display:'block'}}>
          <TextField 
            style={{marginLeft:'0.5rem', maxWidth:'5.5rem', marginTop:'0.75rem'}}
            id="exponentY" 
            value={coeffY}
            onChange={(event:any)=>{if(event.target.value && !isNaN(event.target.value)) setCoeffY(event.target.value) }} 
            label="Exponent Y" 
            variant="outlined" />
        </div>
        <div style={{display:'block'}}>
          <TextField 
            style={{marginLeft:'0.5rem', maxWidth:'5.5rem', marginTop:'0.75rem'}}
            id="exponentX" 
            value={coeffX}
            onChange={(event:any)=>{if(event.target.value && !isNaN(event.target.value)) setCoeffX(event.target.value) }} 
            label="Exponent X" 
            variant="outlined" />
        </div>
      
      </form>
      <Chart {...{year, yAxis,  xAxis, coeffX, coeffY, chartWidth}} />
    </div>
  </div>
}

