import React from 'react'
import { FormControl, Select, MenuItem } from '@material-ui/core'
import { useRecoilValue } from 'recoil'
import * as Atoms from 'components/Atoms'

export default function Parameters ({ layerKey, param, setParam, setLayers }:any) {
  const tilejson:{[k: string]: any} = useRecoilValue(Atoms.tilejson);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setParam(event.target.value as string);
    setLayers((prev:any)=>({ ...prev, [layerKey]: event.target.value as string }))
  };

  return <>
    <FormControl variant="standard" style={{paddingLeft: '2rem'}} >
      <Select
        id={layerKey}
        value={param}
        onChange={handleChange}
        style={{width:'220px', textTransform:"capitalize"}}
      >
        {
          (Object.keys(tilejson[layerKey].properties) as Array<keyof typeof tilejson>)
            .map((itemKey, i)=>
              <MenuItem 
                key={i} 
                style={{textTransform:"capitalize"}} 
                value={itemKey}>
                  {
                    typeof(itemKey)==="string"?
                    itemKey.replaceAll('_',' '):
                    itemKey
                  }
              </MenuItem>
            )
        }
      </Select>
    </FormControl>
  </>
}
