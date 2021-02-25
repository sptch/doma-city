import React, { useState } from 'react'
import { FormControlLabel, Checkbox } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import * as Atoms from 'components/Atoms'
import DataParameters from './DataParameters'

export default function DataLayer ({ fields, layerKey, years }:any) {

  const [param, setParam] = useState('land_value')
  const [layers, setLayers] = useRecoilState<any>(Atoms.tileLayers)
  const [year, setYear] = useRecoilState<any>(Atoms.taxesYear)
  const [legendData, setLegendData] = useRecoilState<any>(Atoms.legendData)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLayers((prev:any)=>({ ...prev, [event.target.name]: event.target.checked && param }))
  }

  return <> 
    <FormControlLabel
      control={
        <Checkbox 
          checked={Boolean(layers[layerKey])} 
          onChange={handleChange} 
          name={layerKey} 
        />
      }
      label={layerKey.replaceAll("_", " ")}
      style={{textTransform:"capitalize"}}
    />
    { Boolean(layers[layerKey]) && <DataParameters {...{param, setParam, year, setYear, years, layerKey, fields, setLayers}} /> }
  </>
}
