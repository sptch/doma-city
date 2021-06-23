import React, { useState } from 'react'
import { FormControlLabel, Checkbox, Typography } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { atoms } from 'misc'
import DataParameters from './DataParameters'

export default function DataLayer ({ fields, layerKey, years }:any) {

  const [param, setParam] = useState('land_value')
  const [layers, setLayers] = useRecoilState<any>(atoms.tileLayers)
  const [year, setYear] = useRecoilState<any>(atoms.taxesYear)
  const [legendData, setLegendData] = useRecoilState<any>(atoms.legendData)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLayers((prev:any)=>({ ...prev, [event.target.name]: event.target.checked && param }))
  }

  return <> 
    <FormControlLabel
      control={
        <Checkbox 
          disableRipple
          size='small'
          checked={Boolean(layers[layerKey])} 
          onChange={handleChange} 
          name={layerKey} 
          style={{color:'#bbb', paddingTop:0, paddingBottom:0, marginRight:'0.5rem'}}
        />
      }
      label={
      <Typography variant="body2" component="div" style={{display:'inline-block', textTransform:"capitalize"}}>
        {layerKey.split('_x_')[1].replace('_geom','').replaceAll("_", " ")}
      </Typography>}
      style={{textTransform:"capitalize"}}
    />
    { Boolean(layers[layerKey]) && <DataParameters {...{param, setParam, year, setYear, years, layerKey, fields, setLayers}} /> }
  </>
}
