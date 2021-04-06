import React, { useMemo, useState } from 'react';
import data from './data.json'
import { Button } from '@material-ui/core' 
import { Close } from '@material-ui/icons'
import Chart from './Chart'
import ChartButton from './ChartButton'
import Form from './Form'
import { useSpring, animated } from 'react-spring' 

const scale = (n:number, coeff:number)=>{
  return Math.pow(n, coeff)
}

export function ChartPanel ( {pos, open, setOpen}:any ) {

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

  return <>
        <Button 
          size='small'
          onClick={()=>{
            console.log('click')
            setOpen(false)
          }} 
          className="Close-chart"
          style={{
            right:'1rem',
            top:'1rem',
            minWidth:'0.8rem',
            position:'absolute'}}>
          <Close fontSize='small' />
        </Button>
      <Form {...{year, setYear, yAxis, setYAxis, xAxis, setXAxis, coeffX, setCoeffX, coeffY, setCoeffY, fields}}/>
      <Chart {...{year, yAxis,  xAxis, coeffX, coeffY, chartWidth}} />
    </>
}

export default ()=>{

  const [open, setOpen ] = useState(false)
  const pos:any = useSpring({
    from:{ translateX: 100 },
    to: open?{ translateX:0 }:{ translateX: 100 },
  })
  const chartWidth = '35vw'

  return (<>
    <animated.div style={{
      transform: pos.translateX.interpolate((v:number)=>`translate(calc( -${v}% - ${v/100}rem),0)`),
      width: chartWidth, 
      height: 'calc( 100vh - 4rem )', 
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
      border: 'solid 2px rgba(255,255,255,0.6)'
    }}>
      <ChartButton {...{pos, open, setOpen}} />
      <ChartPanel {...{pos, open, setOpen}} />
    </animated.div>
  </>);
}