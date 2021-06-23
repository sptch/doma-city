import React, { useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import { useRecoilState } from 'recoil'
import { atoms, queries, interpolateColor } from 'misc'


export default function PaintLayer ({ dataType, dataLayerKey, visible, source, sourceLayer, setPaintProperty, setCircleSizeProperty, setExtrude }:any) {
  type ColorMode = 'quantile' | 'linear'
  let mode: ColorMode = 'quantile'
  const [legendData, setLegendData] = useRecoilState<any>(atoms.legendData)
  const [tilejson] = useRecoilState<any>(atoms.tilejson);

  const ntiles:number = 6

  const [getRange, { data:range, called, loading }] = useLazyQuery(queries.getRange(source, dataLayerKey), {variables:{
    numeric: 
      dataType!=='varchar'
  }, fetchPolicy: "no-cache"})

  const [getNTiles, { data:tiles }] = useLazyQuery(queries.getNTiles, { variables: {
    table_id: source, 
    column_id: dataLayerKey,
    ntiles,
    mode: 'min'
  }, fetchPolicy: "no-cache"})

  useEffect(()=>{
    if(!visible){
      setLegendData(({[source]:remove, ...rest}:any)=>rest)
    }
  }, [visible, sourceLayer])

  useEffect(()=>{
    if(visible && !called) {
      const numeric = 
        dataType!=='varchar'
      getRange(); 
      if(numeric) getNTiles(); 
    }
  },[visible, called, getRange, getNTiles])

  useEffect(()=>{
    const numeric = 
      dataType!=='varchar'

    if( visible && range && (tiles || !numeric)){  

      if(numeric){
        if(range[source+'_aggregate']){
          console.log(tiles.get_tiles)
          const legendPairs = tiles.get_tiles
          .filter((v:any)=>v.tile!==null)
          ?.reduce((arr:any,v:any)=>{
            if( !(arr.includes(v.tile)) ){
              arr.push(v.tile)
            }
            return arr
          },[])
          ?.map((v:number, i:number, arr:any)=>[
            v, 
            interpolateColor(
              (v-arr[0])/
              (arr[arr.length-1]-arr[0])
            )
          ])
          console.log(legendPairs)

          setLegendData((prev:any)=>({...prev, [source]:legendPairs}))
          setPaintProperty([
            'step',
            ['to-number',['get', dataLayerKey], tiles.get_tiles[0].tile], 
            "#cccccc",
            ...legendPairs.flat()
          ])
          setExtrude((prev:any)=>({...prev, [source]:['case', ['boolean', ['feature-state', 'hover'], false], [
            'interpolate', ['linear'],
            ['to-number', ['get', dataLayerKey], tiles.get_tiles[0].tile], 
            ...tiles.get_tiles
            ?.reduce((arr:any,v:any)=>{
              if(!arr.find((a:any)=>a===v.tile)){
                arr.push(v.tile)
              }
              return arr
            },[])
            ?.map((v:number, i:number, arr:any)=>[
              v, 
              ((v-arr[0])/
              (arr[arr.length-1]-arr[0]) * 1000) + 300
            ]).flat()
          ],[
            'interpolate', ['linear'],
            ['to-number', ['get', dataLayerKey], tiles.get_tiles[0].tile], 
            ...tiles.get_tiles
            ?.reduce((arr:any,v:any)=>{
              if(!arr.find((a:any)=>a===v.tile)){
                arr.push(v.tile)
              }
              return arr
            },[])
            ?.map((v:number, i:number, arr:any)=>[
              v, 
              ((v-arr[0])/
              (arr[arr.length-1]-arr[0]) * 1000) + 150
            ]).flat()
          ] ]})) 
          
          if( 
            tilejson[source].geometry_type.toUpperCase()==="POINT" ||
            tilejson[source].geometry_type.toUpperCase()==="MULTIPOINT"
          ){ 
            setCircleSizeProperty((prev:any)=>({...prev, [source]:
              ['case', 
                ['boolean', ['feature-state', 'hover'], false], 
                [
                  'interpolate', ['linear'],
                  ['to-number', ['get', dataLayerKey], tiles.get_tiles[0].tile], 
                  ...tiles.get_tiles
                  .filter((v:any)=>v.tile!==null)
                  ?.reduce((arr:any,v:any)=>{
                    if( !(arr.includes(v.tile)) ){
                      arr.push(v.tile)
                    }
                    return arr
                  },[])
                  ?.map((v:number, i:number, arr:any)=>[
                    v, 
                    ((v-arr[0])/
                    (arr[arr.length-1]-arr[0]) * 5) + 8
                  ]).flat()
                ],[
                  'interpolate', ['linear'],
                  ['to-number', ['get', dataLayerKey], tiles.get_tiles[0].tile], 
                  ...tiles.get_tiles
                  .filter((v:any)=>v.tile!==null)
                  ?.reduce((arr:any,v:any)=>{
                    if( !(arr.includes(v.tile)) ){
                      arr.push(v.tile)
                    }
                    return arr
                  },[])
                  ?.map((v:number, i:number, arr:any)=>[
                    v, 
                    ((v-arr[0])/
                    (arr[arr.length-1]-arr[0]) * 5) + 3
                  ]).flat()
                ] 
              ]
            })) 
          }
        }
      }else{
        //Here goes categorical
        setExtrude(false)
        if(range[source]){
          if(tilejson?.[source]?.properties?.color){
            console.log(range)
            setLegendData((prev:any)=>({
              ...prev,
              [source]:range[source]?.map((v:any, i:number)=>[
                v._name,
                v[dataLayerKey]
              ])
            }))
            setPaintProperty(['get','color']) 
          }else{
            setLegendData((prev:any)=>({
              ...prev,
              [source]:range[source]?.map((v:string, i:number)=>[
                v[dataLayerKey], 
                interpolateColor(i/(range[source].length-1), false)
              ])
            }))
            setPaintProperty([
              'case', 
              ...range[source]?.map((v:string, i:number)=>[
                ["==", ['get', dataLayerKey], v[dataLayerKey]], 
                interpolateColor(i/(range[source].length-1), false)
              ]).flat(),
              '#cccccc'
            ]) 
          }
        }
      }
    }
  },[ range, tiles, visible])


  return null 
}
