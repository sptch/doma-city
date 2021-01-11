import React, { useEffect, useMemo, useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Box, FormLabel, FormControl, FormGroup, FormControlLabel, FormHelperText, Checkbox, useEventCallback,
  Select, MenuItem, InputLabel  } from '@material-ui/core'
import { useRecoilState, useRecoilValue } from 'recoil'
import * as Atoms from 'components/Atoms'
import * as Queries from 'components/Queries'
import { useQuery } from '@apollo/client'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }),
)

const DataParameters = ({ param, years, setParam, fields, setLayers, layerKey }:any)=>{

  useEffect(()=>{
    console.log(fields)
  },[fields])
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
            fields.map((itemKey:any, i:number)=>
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
            years.map((itemKey:any, i:number)=>
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

const DataLayer = ({ fields, layerKey, years }:any)=>{

  const [param, setParam] = useState('current_land_value')
  const [layers, setLayers] = useRecoilState<any>(Atoms.tileLayers)
  const [year, setYear] = useRecoilState<any>(Atoms.taxesYear)

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
      label='Tax reports' 
      style={{textTransform:"capitalize"}}
    />
    { Boolean(layers[layerKey]) && <DataParameters {...{param, setParam, year, setYear, years, layerKey, fields, setLayers}} /> }
  </>
}

const Parameters = ({ layerKey, param, setParam, setLayers }:any)=>{
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

const Layer = ({ layerKey }:any)=>{

  const tilejson:{[k: string]: any} = useRecoilValue(Atoms.tilejson);
  const [param, setParam] = useState(
    (Object.keys(tilejson[layerKey].properties) as Array<keyof typeof tilejson>)[0]
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
    { Boolean(layers[layerKey]) && <Parameters {...{layerKey, param, setParam, setLayers}} /> }
  </>
}

export default ()=>{
  const classes = useStyles()
  const [layers, setLayers] = useRecoilState<any>(Atoms.tileLayers)
  const [dataLayers, setDataLayers] = useRecoilState<any>(Atoms.dataLayers)

  const { data:keys } = useQuery(Queries.getKeys("taxes_data"))
  const { data:years } = useQuery(Queries.getRange('taxes_data', 'report_year'), {variables:{numeric: false}})

  useEffect(()=>{
    if(keys){
      console.log('got keys', keys)
      setDataLayers({taxes: keys.__type.fields})
    }
  },[keys])

  return (
    <Box style={{width: '100%', overflowX: 'hidden'}}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          {
            Object.keys(dataLayers).length>0 && 
            (Object.entries(dataLayers) as any)
            .map(
              (entries:any, i:any)=><DataLayer 
                {...{
                  layerKey:entries[0],
                  fields:entries[1], 
                  years: years?.taxes_data?.map((v:any)=>v.report_year), 
                  key:i
                }}/>
            )
          }
          {
            Object.keys(layers).length>0 && 
            (Object.keys(layers) as Array<keyof typeof layers>)
            .map(
              (layerKey, i)=>layerKey!=='taxes' &&
              <Layer {...{layers, layerKey, key:i}}/>
            )
          }
        </FormGroup>
      </FormControl>
    </Box>
  )
}