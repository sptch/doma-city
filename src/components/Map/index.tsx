import React, { useState, useRef, useEffect } from 'react';
import MapGL, { Source, Layer, Popup, FeatureState } from '@urbica/react-map-gl'
import { useLazyQuery, gql } from '@apollo/client';
import { useRecoilState, useRecoilValue } from 'recoil'
import * as d3 from 'd3-scale-chromatic'
import * as Atoms from 'components/Atoms'
import * as Queries from 'components/Queries'

import 'mapbox-gl/dist/mapbox-gl.css';

const DataLayer = ({dataType, dataLayerKey, visible, source, sourceLayer, setPaintProperty}:any)=>{
  const year = useRecoilValue<any>(Atoms.taxesYear)
  const [getData, { data, called, refetch }] = useLazyQuery(Queries.getYearValues(source+'_data', dataLayerKey), {variables:{year}, fetchPolicy: "no-cache"})
  const [getRange, { data:range }] = useLazyQuery(Queries.getRange(source+'_data', dataLayerKey), {variables:{
    numeric: 
      dataType==='float8' ||
      dataType==='bigint'
  }, fetchPolicy: "no-cache"})

  useEffect(()=>{
    if(visible && !called) {getRange(); getData(); console.log('load data', new Date())}
  },[visible, called, getData, getRange])

  useEffect(()=>{
    if(data && range){  
      console.log('data was loaded', new Date()) 
      const numeric = 
        dataType==='float8' ||
        dataType==='bigint'
      const matchExpression = ['match', ['get', 'id']];

      if(numeric){
        const {
          min:{[dataLayerKey]:minValue}, 
          max:{[dataLayerKey]:maxValue}} = range[source+'_data_aggregate'].aggregate
        console.log('it was numeric', minValue, maxValue)

        data[source+'_data'].forEach((row:any)=>{
          var value = (row[dataLayerKey] - minValue)/(maxValue-minValue);
          var color = d3.interpolateRainbow(value);
          matchExpression.push(row.id, color);
        });
      }else{
        //Here goes categorical
        console.log(range)
        const options = range[source+'_data'].map((v:any)=>v[dataLayerKey])
        const lookup:any = {}
        for(let i = 0; i<options.length; i++){
          var value = i/(options.length-1);
          var color = d3.interpolateRainbow(value);
          lookup[options[i]]=color
        }
        data[source+'_data'].forEach((row:any)=>{
          matchExpression.push(row.id, lookup[row[dataLayerKey]]);
        });
      }
      matchExpression.push('rgba(0, 0, 0, 0)');

      setPaintProperty({
        "fill-color": matchExpression
      })
    }else{console.log('no data', new Date())}
  },[data, range])

  useEffect(()=>{
    console.log(visible, called, year)
  },[visible, called, year, dataLayerKey])

  return null 
    // && (visible && data && data[source+'_data'])?
    // data[source+'_data'].map((datum:any, i:number)=>{
    //   const {id, ...state} = datum
    //   return <FeatureState {...{id, source, state, key:i, sourceLayer}} />
    // }
    // ):null
}

const MapDataLayer = ({layerKey, property, visible, i}:any)=>{
  const tilejson:{[k: string]: any} = useRecoilValue(Atoms.tilejson);
  const l = tilejson[layerKey]
  const [layers, setLayers] = useRecoilState<any>(Atoms.tileLayers)
  const dataLayers = useRecoilValue<any>(Atoms.dataLayers)
  const [paintProperty, setPaintProperty] = useState({"fill-color": "rgba(247,178,17,0.3)"})

  useEffect(()=>{console.log(dataLayers, property)}, [dataLayers, property])
  return <>
    <Source 
      id={layerKey}
      type="vector"
      tiles={[`https://spatialtech.herokuapp.com/http://dev.spatialtech.info:3003/${l.schema}.${l.table}/{z}/{x}/{y}.pbf`]}
      volatile={true}
      promoteId='id'
    />
    <Layer 
      id={layerKey+'_polygon'}
      type="fill"
      source={l.table}
      source-layer={l.id}
      paint={paintProperty}
      layout={{
        "visibility": visible?'visible':'none'
      }}
    />
    {
      dataLayers[layerKey].map((l:any,i:any)=>
        <DataLayer 
          dataType={l.type.name}
          dataLayerKey={l.name} 
          visible={property && l.name===property}
          source={layerKey}
          sourceLayer={'public.'+layerKey}
          {...{setPaintProperty}}
          key={i} />
      )
    }
  </>
}

const MapLayer = ({layerKey, property, visible, i}:any)=>{
  const tilejson:{[k: string]: any} = useRecoilValue(Atoms.tilejson);
  const l = tilejson[layerKey]

  return <>
        <Source 
          id={layerKey}
          type="vector"
          volatile={true}
          tiles={[`https://spatialtech.herokuapp.com/http://dev.spatialtech.info:3003/${l.schema}.${l.table}/{z}/{x}/{y}.pbf`]}
        />
         {
          (
            l.geometry_type.toUpperCase()==="POINT"||
            l.geometry_type.toUpperCase()==="MULTIPOINT"
          ) &&
          <Layer 
            id={layerKey}
            type="circle"
            source={l.table}
            source-layer={l.id}
            paint={{
              "circle-radius": 2,
              "circle-color": "rgb(247,178,17)",
              "circle-stroke-width": 0
            }}
            layout={{
              "visibility": visible?'visible':'none'
            }}
          />
        }
        {
          (
            l.geometry_type.toUpperCase()==="POLYGON"||
            l.geometry_type.toUpperCase()==="MULTIPOLYGON"||
            l.geometry_type.toUpperCase()==="LINESTRING"||
            l.geometry_type.toUpperCase()==="MULTILINESTRING"||
            l.geometry_type.toUpperCase()==="GEOMETRYCOLLECTION"
          ) &&
          <Layer 
            id={layerKey}
            type="line"
            source={l.table}
            source-layer={l.id}
            paint={{
              "line-width": 2,
              "line-color": "rgb(247,178,17)"
            }}
            layout={{
              "visibility": visible?'visible':'none'
            }}
          />
        }
        {
          (
            l.geometry_type.toUpperCase()==="POLYGON"||
            l.geometry_type.toUpperCase()==="MULTIPOLYGON"
          ) &&
          <Layer 
            id={layerKey+'_polygon'}
            type="fill"
            source={l.table}
            source-layer={l.id}
            paint={{
              "fill-color": "rgba(247,178,17,0.3)"
            }}
            layout={{
              "visibility": visible?'visible':'none'
            }}
          />
        }

  </>
}

export default ()=>{
  const [viewport, setViewport] = useState({ latitude: 49.2827, longitude:  -123.1207, zoom:11 });
  const [loaded, setLoaded] = useState(false)
  const [layers, setLayers] = useRecoilState<object>(Atoms.tileLayers);
  const [tilejson, setTilejson] = useRecoilState<object>(Atoms.tilejson);

  const mapRef = useRef()

  useEffect(()=>{
    fetch("https://spatialtech.herokuapp.com/http://dev.spatialtech.info:3003/index.json")
    .then(d=>d.json())
    .then(d=>{
      let fetchedTilejson: {[k: string]: any} = {}
      let fetchedLayers: {[k: string]: any} = {}
      Object.keys(d).forEach((key, i)=>{
        if(key.includes('public')){
          fetchedTilejson[key.replace('public.','')] = d[key]
          fetchedLayers[key.replace('public.','')] = i===0
        }
      })
      setTilejson(fetchedTilejson)
      setLayers(fetchedLayers)
      console.log(fetchedTilejson)
    })
  },[])

  return (
    <MapGL
      style={{  position:'absolute', top:0,bottom:0,left:0,right:0, border:"none", outline: "none" }}
      mapStyle="mapbox://styles/switch9/ckahu5spr0amr1ik3n1fg0fvt"
      accessToken={'pk.eyJ1Ijoic3dpdGNoOSIsImEiOiJjamozeGV2bnkxajV2M3FvNnpod3h4ODlpIn0.CTt2IXV8II6finbTlxEddg'}
      onViewportChange={setViewport}
      onLoad={()=>{setLoaded(true)}}
      ref={mapRef}
      hash={true}
      {...viewport}
    >
      {
        (Object.entries(layers) as Array<keyof typeof layers>)
        .map((layer, i)=>layer[0]!=="taxes"?
          <MapLayer {...{layerKey: layer[0], property: layer[1], visible:Boolean(layer[1]), i, key:i}}/>:
          <MapDataLayer {...{layerKey: layer[0], property: layer[1], visible:Boolean(layer[1]), i, key:i}}/>
        )
      }
      
    </MapGL>
  );
}