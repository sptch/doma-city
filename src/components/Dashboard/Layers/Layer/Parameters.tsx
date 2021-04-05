import React from 'react'
import { FormControl, Select, MenuItem, Typography } from '@material-ui/core'
import { useRecoilValue } from 'recoil'
import * as Atoms from 'misc/Atoms'
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles(()=>({
  select: {
    backgroundColor:'green',
    '&:hover': {
      backgroundColor:'red',
    },
    '&hover': {
      backgroundColor:'red',
    },
    '&:hover $child': {
      backgroundColor: 'red'
    }
  }
}))

export default function Parameters ({ layerKey, param, setParam, setLayers }:any) {
  const tilejson:{[k: string]: any} = useRecoilValue(Atoms.tilejson);
  const classes = useStyles()
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
        SelectDisplayProps={{style:{backgroundColor:'rgba(255,255,255,0.05)', border:'solid 1px rgba(255,255,255,0.2)', marginBottom:'0.5rem'}}}
        style={{width:'220px', textTransform:"capitalize"}}
      >
        {
          (Object.keys(tilejson[layerKey].properties) as Array<keyof typeof tilejson>)
            .sort()
            .map((itemKey, i)=>
              <MenuItem 
                key={i} 
                style={{textTransform:"capitalize"}} 
                value={itemKey}>
                  <Typography variant="body2" component="div" style={{display:'block', paddingLeft:'1rem', textTransform:"capitalize"}}>
                    {
                      typeof(itemKey)==="string"?
                      itemKey.replaceAll('_',' '):
                      itemKey
                    }
                  </Typography>
              </MenuItem>
            )
        }
      </Select>
    </FormControl>
  </>
}
