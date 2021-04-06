import React, { useMemo } from 'react';
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
import* as d3Colors from 'd3-scale-chromatic'
import { hsl } from 'd3-color'
import { Typography } from '@material-ui/core'

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

export default function Chart ({year, yAxis,  xAxis, coeffX, coeffY, chartWidth, plotData}:any) {

  const domainX=[
    Math.min(...plotData.map((v:any)=>v.data)),
    Math.max(...plotData.map((v:any)=>v.data))
  ]

  const domainY=[
    Math.min(...plotData.map((v:any)=>v.key)),
    Math.max(...plotData.map((v:any)=>v.key))
  ]

  return <div style={{
    // paddingLeft:'1.5rem', 
    // paddingBottom:'0.5rem', 
    // paddingTop:'4.5rem', 
    boxSizing:'border-box', 
    width:chartWidth, 
    height:chartWidth, 
    marginTop:'auto', 
    position:'absolute', 
    display:'block', 
    bottom:'1rem', 
    minWidth: '66vh', 
    minHeight:'66vh',
    maxHeight:'calc( 100vh - 13rem )'}}>
      {/* <Typography variant="caption" style={{ textTransform: "capitalize", transform:'rotate(180deg)', color:'#aaa', position:'absolute', left:'0.4rem', top:"7.5rem", textAnchor:'start', writingMode:"vertical-lr"}}>{yAxis.replaceAll('_',' ')}</Typography>
      <Typography variant="caption" style={{ textTransform: "capitalize", color:'#aaa', position:'absolute', right:'1.2rem', bottom:"0.4rem", textAnchor:'end'}}>{xAxis.replaceAll('_',' ')}</Typography> */}

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
                    <div style={{display:'block', position: "relative", padding:"10px", borderRadius:'5px', borderColor:'rgba(255,255,255,0.6)', borderStyle:'solid', borderWidth:'2px', backgroundColor: "rgba(12, 21, 26, 1)"}}>
                      <Typography style={{display:'block', position: "relative", fontWeight:"bold"}}>{data.id}</Typography>
                      {Object.entries(data.metadata)
                        .filter(([key,value]:any)=>!isNaN(value)&&key!=="year")
                        .map(([key,value]:any, i)=><Typography key={i} style={{display:'block', position: "relative", textAlign:'start', textTransform: "capitalize"}}>{key.replaceAll('_',' ')}: {isNaN(value)?value:value?.toFixed(2)}</Typography>)}
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
}
