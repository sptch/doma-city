import React, { useEffect, useMemo, useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Box, FormLabel, FormControl, FormGroup, FormControlLabel, FormHelperText, Checkbox, useEventCallback,
  Select, MenuItem, InputLabel  } from '@material-ui/core'
import { useRecoilState, useRecoilValue } from 'recoil'
import * as Atoms from 'components/Atoms'
import * as Queries from 'components/Queries'
import { useQuery } from '@apollo/client'
import DataLayer from './DataLayer'
import Layer from './Layer'
import otherLayers from 'sources.json'

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

export default ()=>{
  const classes = useStyles()
  const [layers] = useRecoilState<any>(Atoms.tileLayers)
  const [dataLayersNames] = useRecoilState<any>(Atoms.dataLayersNames)
  const [dataLayers, setDataLayers] = useRecoilState<any>(Atoms.dataLayers)

  const { data:keys } = useQuery(Queries.getKeys(dataLayersNames))
  const { data:years } = useQuery(Queries.getRange('vancouver_x_property_tax_parcels_data', 'report_year'), {variables:{numeric: false}})

  useEffect(()=>{
    if(keys){
      console.log(keys)
      setDataLayers(keys)
    }
  },[keys])

  useEffect(()=>{
    if(layers){
      console.log(layers)
    }
  },[layers])

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
                  fields:entries[1]?.fields, 
                  years: years?.vancouver_x_property_tax_parcels_data?.map((v:any)=>v.report_year), 
                  key:i
                }}/>
            )
          }
          {
            Object.keys(layers).length>0 && 
            (Object.keys(layers) as any)
            .sort((a:any,b:any)=>{
              var nameA = a.replaceAll('_',' ').toUpperCase(); // ignore upper and lowercase
              var nameB = b.replaceAll('_',' ').toUpperCase(); // ignore upper and lowercase
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
              return 0;
            })
            .map(
              (layerKey:any, i:number)=>(layerKey!=='vancouver_x_property_tax_parcels'&&layerKey!=='vancouver_x_property_tax_blocks') &&
              <Layer {...{layers, layerKey, key:i}}/>
            )
          }
        </FormGroup>
      </FormControl>
    </Box>
  )
}