import React, { useMemo, useState, useEffect } from 'react';
// import data from './data.json'
import { Button } from '@material-ui/core' 
import { Close } from '@material-ui/icons'
import Chart from './Chart'
import ChartButton from './ChartButton'
import Form from './Form'
import { useSpring, animated } from 'react-spring' 
import { useRecoilState } from 'recoil'
import * as Atoms from 'misc/Atoms'
import * as Queries from 'misc/Queries'
import { useApolloClient, gql } from '@apollo/client'

const scale = (n:number, coeff:number)=>{
  return Math.pow(n, coeff)
}

const chartWidth = '35vw'

export function ChartPanel ( {pos, open, setOpen}:any ) {
  
  const [datasets, setDatasets] = useRecoilState(Atoms.chartDatasets);
  const [dataset, setDataset] = useState('proprietary_x_numbeo')
  const [year, setYear] = useState(2020)
  const [yAxis, setYAxis] = useState('price_to_rent_city_center')
  const [xAxis, setXAxis] = useState('price_to_annual_income')

  const [coeffX, setCoeffX] = useState(0.001)
  const [coeffY, setCoeffY] = useState(0.001)
  const [data, setData] = useState<any>([])
  const client = useApolloClient()

  useEffect(()=>{
    (async ()=>{
      if( datasets[dataset]){
        const fetchedData = await client.query({
          query: datasets[dataset]?.fields.find(v=>v.name==='year') ?
            Queries.getYearValues(dataset, datasets[dataset].fields.map(v=>v.name)):
            Queries.getChartValues(dataset, datasets[dataset].fields.map(v=>v.name)),
          ...(datasets[dataset]?.fields.find(v=>v.name==='year') ? {variables:{year}} : {})
        })
        console.log(fetchedData)
        setData(fetchedData.data[dataset])
        setYAxis(datasets[dataset].fields[0].name)
        setXAxis(datasets[dataset].fields[1].name)
      }
    })()
  },[dataset, datasets, year])

  useEffect(()=>{
    if(data[dataset] && datasets[dataset]){
      setYAxis(datasets[dataset].fields[0].name)
      setXAxis(datasets[dataset].fields[1].name)
    }
  },[dataset, datasets, data])

  const plotData = useMemo(
    ()=>data
    .map((d:any)=>({
      key: scale(d[xAxis], coeffX),
      data: scale(d[yAxis], coeffY),
      id: d.id,
      metadata: d
    })), [data, year, coeffX, coeffY, xAxis, yAxis]
  )
  console.log(plotData[0])

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
      <Form {...{dataset, setDataset, year, setYear, yAxis, setYAxis, xAxis, setXAxis, coeffX, setCoeffX, coeffY, setCoeffY}}/>
      <Chart {...{year, yAxis,  xAxis, coeffX, coeffY, chartWidth, plotData}} />
    </>
}

export default ()=>{

  const [open, setOpen ] = useState(false)
  const pos:any = useSpring({
    from:{ translateX: 100 },
    to: open?{ translateX:0 }:{ translateX: 100 },
  })

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