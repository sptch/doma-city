import React, { useMemo, useState } from 'react';
import data from './data.json'
import {TextField, Select, MenuItem, InputLabel, Typography } from '@material-ui/core'
import Chart from './Chart'
import Form from './Form'

const scale = (n:number, coeff:number)=>{
  return Math.pow(n, coeff)
}

export default function ChartPanel ( props:any ) {

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
      <Form {...{year, setYear, yAxis, setYAxis, xAxis, setXAxis, coeffX, setCoeffX, coeffY, setCoeffY, fields}}/>
      <Chart {...{year, yAxis,  xAxis, coeffX, coeffY, chartWidth}} />
    </div>
  </div>
}

