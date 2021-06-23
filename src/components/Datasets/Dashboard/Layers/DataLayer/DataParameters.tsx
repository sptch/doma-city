import React, { useEffect } from 'react'
import { FormControl, Select, MenuItem, Typography } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { atoms } from 'misc'
import { ArrowDropDown } from '@material-ui/icons'

export default function DataParameters ({ param, years, setParam, fields, setLayers, layerKey }:any) {

  useEffect(()=>{console.log(fields)},[fields])
  const [year, setYear] = useRecoilState<any>(atoms.taxesYear)

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
        IconComponent={()=><ArrowDropDown fontSize='small' style={{color:'white', marginLeft:'-1.3rem', marginTop:'-0.2rem'}}/>}
        SelectDisplayProps={{style:{backgroundColor:'rgba(255,255,255,0.05)', border:'solid 1px rgba(255,255,255,0.2)', marginBottom:'0.5rem'}}}
        style={{width:'220px', textTransform:"capitalize"}}
      >
        {
            fields && fields
            .filter(({name:key}:any)=> key.charAt(0)!=="_" && key.substr(0,2).toLocaleLowerCase()!=="id" && key.substr(0,2).toLocaleLowerCase()!=="id" && key!=="year")
            ?.map((itemKey:any, i:number)=>
              <MenuItem 
                key={i} 
                style={{textTransform:"capitalize", display:'block', minHeight:'1.5rem'}} 
                value={itemKey.name}
              >
                <Typography variant="body2" component="div" style={{display:'block', paddingLeft:'1rem', textTransform:"capitalize"}}>
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
        IconComponent={()=><ArrowDropDown fontSize='small' style={{color:'white', marginLeft:'-1.3rem', marginTop:'-0.2rem'}}/>}
        SelectDisplayProps={{style:{backgroundColor:'rgba(255,255,255,0.05)', border:'solid 1px rgba(255,255,255,0.2)', marginBottom:'0.5rem'}}}
        style={{width:'220px', textTransform:"capitalize"}}
      >
        {
            years && years.map((itemKey:any, i:number)=>
              <MenuItem 
                key={i} 
                style={{textTransform:"capitalize", display:'block', minHeight:'1.5rem'}} 
                value={itemKey}
              >
                <Typography variant="body2" component="div" style={{display:'block', paddingLeft:'1rem', textTransform:"capitalize"}}>
                  {itemKey}
                </Typography>
              </MenuItem>
            )
        }
      </Select>
    </FormControl>
  </>
}
