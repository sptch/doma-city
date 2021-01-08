import React, { useState, useRef, useEffect } from 'react';
import MapGL, { Source, Layer, Popup } from '@urbica/react-map-gl'
import { useQuery, gql } from '@apollo/client';
import { useRecoilState, useRecoilValue } from 'recoil'
import * as Atoms from './../Atoms'
import 'mapbox-gl/dist/mapbox-gl.css';


const MapLayer = ({layer,i}:any)=>{
  const tilejson:{[k: string]: any} = useRecoilValue(Atoms.tilejson);
  const l = tilejson[layer[0]]
  useEffect(()=>{
    console.log(l)
  },[l])

  return <>
        <Source 
          id={layer[0]}
          type="vector"
          tiles={[`https://spatialtech.herokuapp.com/http://dev.spatialtech.info:3003/${l.schema}.${l.table}/{z}/{x}/{y}.pbf`]}
        />
         {
          (
            l.geometry_type.toUpperCase()==="POINT"||
            l.geometry_type.toUpperCase()==="MULTIPOINT"
          ) &&
          <Layer 
            key={i+1}
            id={layer[0]}
            type="circle"
            source={l.table}
            source-layer={l.id}
            paint={{
              "circle-radius": 2,
              "circle-color": "rgb(247,178,17)",
              "circle-stroke-width": 0
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
            id={layer[0]}
            key={(i+2)*10}
            type="line"
            source={l.table}
            source-layer={l.id}
            paint={{
              "line-width": 2,
              "line-color": "rgb(247,178,17)"
            }}
          />
        }
        {
          (
            l.geometry_type.toUpperCase()==="POLYGON"||
            l.geometry_type.toUpperCase()==="MULTIPOLYGON"
          ) &&
          <Layer 
            id={layer[0]+'_polygon'}
            key={(i+3)*100}
            type="fill"
            source={l.table}
            source-layer={l.id}
            paint={{
              "fill-color": "rgba(247,178,17,0.3)"
            }}
          />
        }

  </>
}

export default ()=>{
  const [viewport, setViewport] = useState({ latitude: 49.2827, longitude:  -123.1207, zoom:11 });
  const [loaded, setLoaded] = useState(false)
  const [layers, setLayers] = useRecoilState<object>(Atoms.selectedLayers);
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

  useEffect(()=>{
    console.log(layers)
  },[layers])

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
        .filter(entry=>entry[1])
        .map((layer, i)=><MapLayer {...{layer,i, key:i}}/>)
      }
      
    </MapGL>
  );
}