import { Entries } from "misc";
import { useState } from "react";
import { ChartTooltip,TooltipArea, Line, LinearXAxis, LinearXAxisTickSeries, LinearYAxis, LinearYAxisTickSeries, LineChart, LineSeries } from "reaviz";
import { LinearAxisTickLabel } from './LinearAxisTickLabel'
import * as d3 from 'd3-format'
import { Typography } from "@material-ui/core";

const format:any = d3.format("~s") 

export default function Chart({width=350,height=350, data=[] as Entries  }) {


  return (
    <div style={{position:'absolute', left:'2rem', bottom:'1rem'}}>
      <LineChart
        width={width-55}
        height={height-40}
        data={data}        
        series={
          <LineSeries
            type="grouped"
            interpolation='smooth'
            colorScheme={(data,i,a)=>{
              return data[0].key==='incomes'?'white':'red'
            }}
            tooltip={ <TooltipArea disabled={true} /> }
            line={<Line strokeWidth={2} />}
          />
        }
        yAxis={
          <LinearYAxis
            type="value"
            axisLine={null}
            // scaled
            roundDomains
            // domain={domainX}
            // scale={scaleY}
            tickSeries={
              <LinearYAxisTickSeries
                line={null}
                label={<LinearAxisTickLabel 
                  orientation="vertical"
                  format={v=>format(v)} 
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
            domain={[2005,2020]}
            //roundDomains
            type="value"
            axisLine={null}
            tickSeries={
              <LinearXAxisTickSeries
                line={null}
                label={
                  <LinearAxisTickLabel 
                    orientation="horizontal"
                    format={v=>v}
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
  )
}