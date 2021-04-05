import React, { useState } from 'react'
import { FormControlLabel, Checkbox, Typography } from '@material-ui/core'
import { useRecoilState, useRecoilValue } from 'recoil'
import * as Atoms from 'misc/Atoms'
import Parameters from './Parameters'

export default function Layer ({ layerKey }:any) {

  const tilejson:{[k: string]: any} = useRecoilValue(Atoms.tilejson);
  const [param, setParam] = useState(
    (Object.keys(tilejson[layerKey]?.properties||{}) as Array<keyof typeof tilejson>)[0] ||
    Object.keys(tilejson[layerKey]?.properties||{}).length === 0
  )
  const [layers, setLayers] = useRecoilState<any>(Atoms.tileLayers)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLayers((prev:any)=>({ ...prev, [event.target.name]: event.target.checked && param }))
  }
  const name = layerKey?.split('_x_')?.[1]?.replaceAll('_',' ')

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
          {name?.length>50?name.substring(0,50).concat('...'):name}
        </Typography>}
      style={{textTransform:"capitalize"}}
    />
    { typeof(layers[layerKey])==="string" && <Parameters {...{layerKey, param, setParam, setLayers}} /> }
  </>
}