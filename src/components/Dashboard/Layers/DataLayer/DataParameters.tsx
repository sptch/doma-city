import React, { useEffect } from 'react'
import { FormControl, Select, MenuItem, Typography } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import * as Atoms from 'misc/Atoms'

export default function DataParameters ({ param, years, setParam, fields, setLayers, layerKey }:any) {

  useEffect(()=>{console.log(fields)},[fields])
  const [year, setYear] = useRecoilState<any>(Atoms.taxesYear)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setParam(event.target.value as string);
    setLayers((prev:any)=>({ ...prev, [layerKey]: event.target.value as string }))
  };

  const handleYearChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setYear((prev:any)=>(event.target.value as string))
  };

  return <>
    <FormControl variant="standard" style={{paddingLeft: '2rem'}} >
      <Select
        id='tax_param'
        value={param}
        onChange={handleChange}
        SelectDisplayProps={{style:{backgroundColor:'rgba(255,255,255,0.05)', border:'solid 1px rgba(255,255,255,0.2)', marginBottom:'0.5rem'}}}
        style={{width:'220px', textTransform:"capitalize"}}
      >
        {
            fields && fields
            .filter(({name:key}:any)=> key.charAt(0)!=="_" && key.substr(0,2).toLocaleLowerCase()!=="id" && key.substr(0,2).toLocaleLowerCase()!=="id" && key!=="report_year")
            ?.map((itemKey:any, i:number)=>
              <MenuItem 
                key={i} 
                style={{textTransform:"capitalize"}} 
                value={itemKey.name}
              >
                <Typography variant="body2" component="div" style={{display:'inline-block', paddingLeft:'1rem', textTransform:"capitalize"}}>
                  {itemKey.name.replaceAll('_',' ')}
                </Typography>
              </MenuItem>
            )
        }
      </Select>
    </FormControl>
    <FormControl variant="standard" style={{paddingLeft: '2rem'}} >
      <Select
        id='tax_year'
        value={year}
        onChange={handleYearChange}
        SelectDisplayProps={{style:{backgroundColor:'rgba(255,255,255,0.05)', border:'solid 1px rgba(255,255,255,0.2)', marginBottom:'0.5rem'}}}
        style={{width:'220px', textTransform:"capitalize"}}
      >
        {
            years && years.map((itemKey:any, i:number)=>
              <MenuItem 
                key={i} 
                style={{textTransform:"capitalize"}} 
                value={itemKey}
              >
                <Typography variant="body2" component="div" style={{display:'inline-block', paddingLeft:'1rem', textTransform:"capitalize"}}>
                  {itemKey}
                </Typography>
              </MenuItem>
            )
        }
      </Select>
    </FormControl>
  </>
}
