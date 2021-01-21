import React, { useState } from 'react'
import { Source, Layer } from '@urbica/react-map-gl'
import { useRecoilState, useRecoilValue } from 'recoil'
import * as Atoms from 'components/Atoms'
import PaintDataLayer from './PaintDataLayer'

export default function MapDataLayer ({layerKey, property, visible, i}:any) {
  const tilejson:{[k: string]: any} = useRecoilValue(Atoms.tilejson);
  const l = tilejson[layerKey]
  const [layers, setLayers] = useRecoilState<any>(Atoms.tileLayers)
  const dataLayers = useRecoilValue<any>(Atoms.dataLayers)
  const [paintProperty, setPaintProperty] = useState({"fill-color": "rgba(247,178,17,0.3)"})

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
      before='road-label'
    />
    <Layer 
      id={layerKey+'_line'}
      type="line"
      source={l.table}
      source-layer={l.id}
      paint={{
        'line-color': 'rgb(200,200,200)',
        'line-width': 0.2
      }}
      layout={{
        "visibility": visible?'visible':'none'
      }}
      minzoom={13}
      before='road-label'
    />
    {
      dataLayers[layerKey]?.map((l:any,i:any)=>
        <PaintDataLayer 
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
