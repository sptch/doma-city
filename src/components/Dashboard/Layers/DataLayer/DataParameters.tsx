import React, { useEffect } from 'react'
import { FormControl, Select, MenuItem } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import * as Atoms from 'components/Atoms'

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
                  {itemKey.name.replaceAll('_',' ')}
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
        style={{width:'220px', textTransform:"capitalize"}}
      >
        {
            years && years.map((itemKey:any, i:number)=>
              <MenuItem 
                key={i} 
                style={{textTransform:"capitalize"}} 
                value={itemKey}
              >
                  {itemKey}
              </MenuItem>
            )
        }
      </Select>
    </FormControl>
  </>
}
