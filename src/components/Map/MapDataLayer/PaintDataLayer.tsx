import React, { useEffect } from 'react'
import { useLazyQuery } from '@apollo/client';
import { useRecoilState } from 'recoil'
import interpolateColor from 'misc/interpolateColor'
import * as Atoms from 'misc/Atoms'
import * as Queries from 'misc/Queries'

export default function PaintDataLayer ({dataType, dataLayerKey, visible, source, sourceLayer, setPaintProperty, extrude, setExtrude}:any) {
  const [year] = useRecoilState<any>(Atoms.taxesYear)
  const [legendData, setLegendData] = useRecoilState<any>(Atoms.legendData)

  type ColorMode = 'quantile' | 'linear'
  let mode:ColorMode = 'quantile'
  
  const ntiles = 8
  const [getData, { data, called, loading, refetch }] = useLazyQuery(Queries.getYearValues(source.replace('_geom','')+'_data', [dataLayerKey]), {variables:{year}, fetchPolicy: "no-cache"})
  const [getRange, { data:range }] = useLazyQuery(Queries.getRange(source.replace('_geom','')+'_data', dataLayerKey), {variables:{
    numeric: 
      dataType==='float8' ||
      dataType==='bigint' ||
      dataType==='Int'
  }, fetchPolicy: "no-cache"})

  const [getNTiles, { data:tiles }] = useLazyQuery(Queries.getNTiles, {variables:{
    table_id: source.replace('_geom','')+'_data', 
    column_id: dataLayerKey,
    ntiles,
    mode: 'min'
  }, fetchPolicy: "no-cache"})

  useEffect(()=>{
    if(!visible){
      setLegendData(({[sourceLayer.replace('public.','')]:remove, ...rest}:any)=>rest)
    }
  }, [visible, sourceLayer])

  useEffect(()=>{
    if(visible && called && !loading && refetch) {
      refetch({year})
    }
  },[visible, called, year, refetch, getData])

  useEffect(()=>{
    if(visible && !called) {
      const numeric = 
        dataType==='float8' ||
        dataType==='bigint' ||
        dataType==='Int'
      getRange(); 
      if(numeric) getNTiles(); 
      getData(); 
    }
  },[visible, called, getData, getRange, getNTiles])

  useEffect(()=>{
    const numeric = 
      dataType==='float8' ||
      dataType==='bigint' ||
      dataType==='Int'

    if(data && visible && range && (tiles || !numeric)){  
      const matchExpression = ['match', ['get', 'id']];
      const extrudeExpression:any = ['match', ['get', 'id']];

      if(numeric){
        const {
          min:{[dataLayerKey]:minValue}, 
          max:{[dataLayerKey]:maxValue}
        } = range[source.replace('_geom','')+'_data_aggregate'].aggregate

        const lookup:any = {}
        tiles.get_tiles.forEach((tile:any, i:number)=>{
          var value = i/(ntiles-1);
          var color = interpolateColor(value);
          lookup[i] = {}
          lookup[i].color = color
          lookup[i].min = tile.tile
          lookup[i].max = i<(ntiles-1)?
            tiles.get_tiles[i+1].tile:
            Infinity
        })

        setLegendData((prev:any)=>({
          ...prev,
          [sourceLayer.replace('public.','')]:Object.entries(lookup).reduce((arr:any,v:any)=>{
            arr.push([v[1].min, v[1].color])
            return arr
          },[])
        }))

        const getColor = (x:any)=>{
          let color
          for(let i = 0; i< ntiles-1; i++){
            if(x>=lookup[i].min && x<lookup[i].max){
              color = lookup[i].color;
            }
          }
          if(!color) color = lookup[ntiles-1].color
          return color
        }

        const getHeight = (x:any)=>{
          const start = 10
          const height = 1000
          const heightUnit = height/(ntiles-1)

          let heightValue = 0
          for(let i = 0; i< ntiles; i++){
            if(x>=lookup[i].min && x<lookup[i].max){
              heightValue = (i*heightUnit)+((x - lookup[i].min)/lookup[i].max)*heightUnit;
            }
          }
          // const heightValue = (
          //   x - tiles.get_tiles[0].tile
          // ) / tiles.get_tiles[tiles.get_tiles.length-1].tile;
          return start + (heightValue)
        }

        if(mode==='linear'){
          data[source.replace('_geom','')+'_data'].forEach((row:any)=>{
            var value = (row[dataLayerKey] - minValue)/(maxValue-minValue);
            var color = interpolateColor(value);
            matchExpression.push(row.id, color);
          });
        }else{
          data[source.replace('_geom','')+'_data'].forEach((row:any)=>{
            var color = getColor( row[dataLayerKey] )
            var height = getHeight( row[dataLayerKey] )
            matchExpression.push(row.id, color);
            extrudeExpression.push(row.id, height);
          });
          extrudeExpression.push(300)
          console.log(extrudeExpression)
          setExtrude(extrudeExpression)
        }
      }else{
        //Here goes categorical
        console.log('plain')
        setExtrude(0)
        const options = range[source.replace('_geom','')+'_data']?.map((v:any)=>v[dataLayerKey])
        const lookup:any = {}
        for(let i = 0; i<options.length; i++){
          var value = i/(options.length-1);
          var color = interpolateColor(value);
          lookup[options[i]]=color
        }
        
        setLegendData((prev:any)=>({
          ...prev,
          [sourceLayer.replace('public.','')]:Object.entries(lookup)
          .map((v:any)=>v[0]==='null'?['Other',v[1]]:v)
        }))

        data[source.replace('_geom','')+'_data'].forEach((row:any)=>{
          matchExpression.push(row.id, lookup[row[dataLayerKey]]);
        });
      }
      matchExpression.push('rgba(0, 0, 0, 0)');
      setPaintProperty( matchExpression)
    }
  },[data, range, tiles, visible])

  return null 
}
