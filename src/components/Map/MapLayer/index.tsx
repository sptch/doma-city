import React, { useEffect, useState } from 'react'
import { Source, Layer, FeatureState } from '@urbica/react-map-gl'
import { useRecoilValue, useRecoilState } from 'recoil'
import * as Atoms from 'misc/Atoms'
import PaintLayer from './PaintLayer'
import getCentroid from '@turf/centroid'

export default function MapLayer ({setCursor, layerKey, property, visible, setAxonometric, i}:any) {
  const tilejson:{[k: string]: any} = useRecoilValue(Atoms.tilejson);
  const l = tilejson[layerKey]
  const [fillColorProperty, setPaintProperty] = useState("rgba(247,178,17,0.3)")
  const [circleSizeProperty, setCircleSizeProperty] = useState<any>({})
  const [hoveredStateId, setHoveredStateId] = useState(null);
  const [popup, setPopup] = useRecoilState<any>(Atoms.popup);
  const [extrude, setExtrude] = useState<any>({})

  useEffect(()=>{
    if(visible&&Object.keys(extrude).length>0){setAxonometric(true)}
    if(visible&&Object.keys(extrude).length===0){setAxonometric(false)}
  },[visible, setAxonometric, extrude])

  const onHover = (event:any) => {
    setCursor("pointer")
    if (event.features.length > 0) {
      const nextHoveredStateId = event.features[0].id;
      if (hoveredStateId !== nextHoveredStateId) {
        setHoveredStateId(nextHoveredStateId);
      }
    }
  };
  
  const onLeave = () => {
    setCursor("")
    if (hoveredStateId) {
      setHoveredStateId(null);
    }
  };

  const onClick = (e:any)=>setPopup({ 
    location:{
      longitude: getCentroid(e.features[0].geometry).geometry.coordinates[0],
      latitude: getCentroid(e.features[0].geometry).geometry.coordinates[1]
    },
    properties: e.features[0].properties
  })

  return tilejson[layerKey]?.type==="raster"?
    ( <>
      <Source
        id={l.id}
        type="raster"
        tiles={l.tiles}
        scheme={l.scheme}
        tileSize={l.tileSize||undefined}
        maxzoom={l.maxzoom||undefined}
      />
      { visible &&
        <Layer
          type="raster"
          source={l.id}
          id={l.id}
        />
      }
    </> ):
   (<>
        <Source 
          id={layerKey}
          type="vector"
          volatile={true}
          promoteId="id"
          tiles={[`https://spatialtech.herokuapp.com/http://dev.spatialtech.info:3003/${l.schema}.${l.table}/{z}/{x}/{y}.pbf`]}
        />
        {
          tilejson[layerKey].properties &&
          Object.entries(tilejson[layerKey].properties)
          ?.map((l:any,i:any)=>
            <PaintLayer 
              dataType={l[1]}
              dataLayerKey={l[0]} 
              visible={property && l[0]===property}
              source={layerKey}
              sourceLayer={'public.'+layerKey}
              {...{
                setPaintProperty, 
                setCircleSizeProperty,
                extrude,
                setExtrude
              }}
              key={i} />
          )
        }
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
            onHover={onHover}
            onLeave={onLeave}
            onClick={onClick}
            paint={{
              "circle-radius": circleSizeProperty[layerKey]?circleSizeProperty[layerKey]:['case', ['boolean', ['feature-state', 'hover'], false], 10, 4],
              "circle-color": fillColorProperty,
              "circle-stroke-width": 0,
              'circle-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], 1, 0.8]
            }}
            layout={{
              "visibility": visible?'visible':'none'
            }}
            before='road-label'
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
            onHover={onHover}
            onLeave={onLeave}
            paint={{
              "line-width": ["interpolate", ['linear'], ['zoom'],12,0,14,['case', ['boolean', ['feature-state', 'hover'], false], 4,2]],
              "line-color": fillColorProperty,
              'line-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], tilejson?.[layerKey]?.properties?.color?0.3:1, tilejson?.[layerKey]?.properties?.color?0.15:0.8]
            }}
            layout={{
              "visibility": visible?'visible':'none'
            }}
            before='road-label'
          />
        }
        {
          (
            l.geometry_type.toUpperCase()==="POLYGON"||
            l.geometry_type.toUpperCase()==="MULTIPOLYGON"
          ) && (Object.keys(extrude).length===0 ?
          <Layer 
            id={layerKey+'_polygon'}
            type="fill"
            source={l.table}
            source-layer={l.id}
            onHover={onHover}
            onLeave={onLeave}
            onClick={onClick}
            paint={{
              "fill-color": fillColorProperty,
              'fill-opacity': ['case', ['boolean', ['feature-state', 'hover'], false], tilejson?.[layerKey]?.properties?.color?0.2:1, tilejson?.[layerKey]?.properties?.color?0.05:0.8]
            }}
            layout={{
              "visibility": visible?'visible':'none'
            }}
            before='road-label'
          /> :
          <Layer 
            id={layerKey+'_extrusion'}
            type="fill-extrusion"
            source={l.table}
            source-layer={l.id}
            onHover={onHover}
            onLeave={onLeave}
            onClick={onClick}
            paint={{
              "fill-extrusion-height": extrude[layerKey],
              "fill-extrusion-height-transition": {
                "duration": 300,
                "delay": 0
              },
              "fill-extrusion-color": fillColorProperty,
              "fill-extrusion-opacity": 1
            }}
            layout={{
              "visibility": visible?'visible':'none'
            }}
            before='road-label'
          />)
        }
        {hoveredStateId && <FeatureState id={hoveredStateId} source={layerKey} sourceLayer={'public.'+layerKey} state={{ hover: true }} />}
  </>)
}
