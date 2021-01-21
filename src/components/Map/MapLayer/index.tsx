import React, { useEffect, useState } from 'react'
import { Source, Layer } from '@urbica/react-map-gl'
import { useRecoilValue } from 'recoil'
import * as Atoms from 'components/Atoms'
import PaintLayer from './PaintLayer'

export default function MapLayer ({layerKey, property, visible, i}:any) {
  const tilejson:{[k: string]: any} = useRecoilValue(Atoms.tilejson);
  const l = tilejson[layerKey]
  const [fillColorProperty, setPaintProperty] = useState("rgba(247,178,17,0.3)")

  return <>
        <Source 
          id={layerKey}
          type="vector"
          volatile={true}
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
              {...{setPaintProperty}}
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
            paint={{
              "circle-radius": 5,
              "circle-color": fillColorProperty,
              "circle-stroke-width": 0
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
            paint={{
              "line-width": 2,
              "line-color": fillColorProperty
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
          ) &&
          <Layer 
            id={layerKey+'_polygon'}
            type="fill"
            source={l.table}
            source-layer={l.id}
            paint={{
              "fill-color": fillColorProperty
            }}
            layout={{
              "visibility": visible?'visible':'none'
            }}
            before='road-label'
          />
        }

  </>
}
