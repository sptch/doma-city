import React, { useMemo, useState, useEffect, useCallback, Component } from 'react';
import { 
  ScatterSeries, 
  ScatterPoint, 
  ScatterPlot, 
  ChartTooltip, 
  LinearYAxisTickSeries,
  LinearYAxis,
  LinearXAxisTickSeries,
  LinearXAxis
} from 'reaviz';
import { LinearAxisTickLabel } from './LinearAxisTickLabel'
import data from './data.json'
import * as d3Scale from 'd3-scale'
import* as d3Colors from 'd3-scale-chromatic'
import { hsl } from 'd3-color'
import {TextField, Select, MenuItem, InputLabel, Typography } from '@material-ui/core'

const getColor = (i:number, length:number)=>{
  const color = hsl(
    d3Colors.interpolateMagma(-0.07+(i+150)/(length+150))
  )
  // color.l = 0.5
  // color.s = 0.2
  return color+""
}

const scale = (n:number, coeff:number)=>{
  return Math.pow(n, coeff)
}

const unscale = (n:number, coeff:number)=>{
  const value = Math.pow(n, 1/coeff)
  return value<10?value.toFixed(1):value.toFixed(0)
}

const Plot = (props:any) => {
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

  const domainX=[
    Math.min(...plotData.map((v:any)=>v.data)),
    Math.max(...plotData.map((v:any)=>v.data))
  ]

  const domainY=[
    Math.min(...plotData.map((v:any)=>v.key)),
    Math.max(...plotData.map((v:any)=>v.key))
  ]

  return <div style={{
    width:'500px', 
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
    minWidth: '350px', 
    minHeight: '500px',
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
{/*       
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
     */}
    </form>
    <div style={{paddingLeft:'1.5rem', paddingBottom:'0.5rem', paddingTop:'4.5rem', boxSizing:'border-box', width:'100%', height:'100%'}}>
      <Typography variant="caption" style={{ textTransform: "capitalize", transform:'rotate(180deg)', color:'#aaa', position:'absolute', left:'0.4rem', top:"7.5rem", textAnchor:'start', writingMode:"vertical-lr"}}>{yAxis.replaceAll('_',' ')}</Typography>
      <Typography variant="caption" style={{ textTransform: "capitalize", color:'#aaa', position:'absolute', right:'1.2rem', bottom:"0.4rem", textAnchor:'end'}}>{xAxis.replaceAll('_',' ')}</Typography>

      <ScatterPlot
        data={plotData}
        margins={20}
        series={
          <ScatterSeries
            point={
              <ScatterPoint
                color={(data, i)=>{
                  return getColor(i, plotData.length)
                }}
                tooltip={
                  <ChartTooltip
                    placement="top"
                    content={(data:any) => (
                    <div style={{display:'block', position: "relative", padding:"10px", borderRadius:'5px', borderColor:'#ccc', borderStyle:'solid', borderWidth:'0.5px', backgroundColor: "rgba(255,255,255,0.9)"}}>
                      <span style={{display:'block', position: "relative", fontWeight:"bold"}}>{data.id}</span>
                      {Object.entries(data.metadata)
                        .filter(([key,value]:any)=>!isNaN(value)&&key!=="year")
                        .map(([key,value]:any)=><span style={{display:'block', position: "relative", textAlign:'start', textTransform: "capitalize"}}>{key.replaceAll('_',' ')}: {isNaN(value)?value:value.toFixed(2)}</span>)}
                    </div>
                  )}
                />
                }
                size={(v) => 1/v.metadata.affordability_index+2}
              />
            }
          />
        }
        yAxis={
          <LinearYAxis
            type="value"
            axisLine={null}
            // scaled
            roundDomains
            domain={domainX}
            // scale={scaleY}
            tickSeries={
              <LinearYAxisTickSeries
                line={null}
                label={<LinearAxisTickLabel 
                  orientation="vertical"
                  format={v=>unscale(v, coeffY)} 
                  padding={{fromAxis:10, alongAxis:-5}} 
                  rotation={false}
                  position='start'
                  align='center'
                />}/>
            }
          />
        }
        xAxis={
          <LinearXAxis
            domain={domainY}
            roundDomains
            type="value"
            axisLine={null}
            tickSeries={
              <LinearXAxisTickSeries
                line={null}
                label={
                  <LinearAxisTickLabel 
                    orientation="horizontal"
                    format={v=>unscale(v, coeffX)}
                    padding={{fromAxis: 10, alongAxis: 0 }} 
                    rotation
                    position='end'
                    align='center'
                  />
                }/>
            }
          />
        }
      />
    </div>
  </div>
}

function App() {
  return (
    <div className="App" style={{width:'100%', height:'100%'}}>
      <Plot/>
    </div>
  );
}

export default App;
