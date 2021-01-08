import React, { useEffect } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Box, FormLabel, FormControl, FormGroup, FormControlLabel, FormHelperText, Checkbox, useEventCallback,
  Select, MenuItem, InputLabel  } from '@material-ui/core'
import { useRecoilState, useRecoilValue } from 'recoil'
import * as Atoms from './../../Atoms'
import { useQuery, gql } from '@apollo/client'

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

const getKeys = (table:string)=>gql`
{
   __type(name:"${table}") {
      fields {
         name
         type {
           name
         }
      }  
   }
}`

const getYearValues = (property:any)=>gql`
{
  tax(where: {report_year: {_eq: "2006"}}){
    ${property}
  }
}`

const Parameters = ({ layerKey, param, setParam }:any)=>{
  const tilejson:{[k: string]: any} = useRecoilValue(Atoms.tilejson);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setParam(event.target.value as string);
  };

  return <>
    <FormControl variant="standard" style={{paddingLeft: '1rem'}} >
      <Select
        id={layerKey}
        value={param}
        onChange={handleChange}
        style={{width:'220px'}}
      >
        {
          (Object.keys(tilejson[layerKey].properties) as Array<keyof typeof tilejson>)
            .map((itemKey, i)=><MenuItem key={i} style={{textTransform:"capitalize"}} value={itemKey}>{typeof(itemKey)==="string"?itemKey.replaceAll('_',' '):itemKey}</MenuItem>)
        }
      </Select>
    </FormControl>
  </>
}

const Layer = ({ layerKey }:any)=>{

  const tilejson:{[k: string]: any} = useRecoilValue(Atoms.tilejson);
  const [param, setParam] = React.useState(
    (Object.keys(tilejson[layerKey].properties) as Array<keyof typeof tilejson>)[0]
  )
  const [layers, setLayers] = useRecoilState<any>(Atoms.selectedLayers)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLayers((prev:any)=>({ ...prev, [event.target.name]: event.target.checked && param }))
  }
  const name = layerKey.replaceAll('_',' ')

  return <> 
    <FormControlLabel
      control={<Checkbox checked={Boolean(layers[layerKey])} onChange={handleChange} name={layerKey} />}
      label={name.length>24?name.substring(0,24).concat('...'):name}
      style={{textTransform:"capitalize"}}
    />
    { layers[layerKey] && <Parameters {...{layerKey, param, setParam}} /> }
  </>
}

const TaxParams = ({layerKey}:any)=>{
  const { data:keys } = useQuery(getKeys("tax"))
  const { data:values } = useQuery(getYearValues('current_land_value'))

  useEffect(()=>{
    console.log(keys)
  },[keys])

  useEffect(()=>{
    console.log(values)
  },[values])

  return null
}

export default ()=>{
  const classes = useStyles()
  const [layers, setLayers] = useRecoilState(Atoms.selectedLayers)

  return (
    <Box style={{width: '100%', overflowX: 'hidden'}}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          {Object.keys(layers).length>0 && (Object.keys(layers) as Array<keyof typeof layers>).map((layerKey, i)=>layerKey!=='geom' && <Layer {...{layers, layerKey, key:i}}/>)}
        </FormGroup>
        {/* <TaxParams/> */}
      </FormControl>
    </Box>
  )
}