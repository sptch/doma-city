import React, { useState } from 'react'
import { FormControlLabel, Checkbox } from '@material-ui/core'
import { useRecoilState, useRecoilValue } from 'recoil'
import * as Atoms from 'components/Atoms'
import Parameters from './Parameters'

export default function Layer ({ layerKey }:any) {

  const tilejson:{[k: string]: any} = useRecoilValue(Atoms.tilejson);
  const [param, setParam] = useState(
    (Object.keys(tilejson[layerKey].properties) as Array<keyof typeof tilejson>)[0] ||
    Object.keys(tilejson[layerKey].properties).length === 0
  )
  const [layers, setLayers] = useRecoilState<any>(Atoms.tileLayers)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLayers((prev:any)=>({ ...prev, [event.target.name]: event.target.checked && param }))
  }
  const name = layerKey.replaceAll('_',' ')

  return <> 
    <FormControlLabel
      control={
        <Checkbox 
          checked={Boolean(layers[layerKey])} 
          onChange={handleChange} 
          name={layerKey} 
        />
      }
      label={name.length>24?name.substring(0,24).concat('...'):name}
      style={{textTransform:"capitalize"}}
    />
    { typeof(layers[layerKey])==="string" && <Parameters {...{layerKey, param, setParam, setLayers}} /> }
  </>
}