import { useEffect, useState } from 'react'
import { Source, Layer, FeatureState } from '@urbica/react-map-gl'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useLazyQuery } from '@apollo/client'
import { atoms, queries } from 'misc'
import PaintDataLayer from './PaintDataLayer'
import getCentroid from '@turf/centroid'

export default function MapDataLayer ({setCursor}:any) {
  const [year] = useRecoilState<any>(atoms.taxesYear)
  const [mode] = useRecoilState<any>(atoms.mode)

  const [paintProperty, setPaintProperty] = useState("rgba(247,178,17,0.3)")
  const [hoveredStateId, setHoveredStateId] = useState(null);
  const [popup, setPopup] = useRecoilState<any>(atoms.popup);
  const [popupBase, setPopupBase] = useState<any>({id:0, properties:{id:0}})
  const [extrude, setExtrude] = useState<any>(300)

  const [getDatum, { data:popupData, loading, refetch: refetchDatum }] = useLazyQuery(
    queries.getDatum("synthetic_blocks", ['id', 'rent', 'price']), {variables: {
      id: popupBase.id||popupBase.properties.id||0,
      year: Number(year) || 2006
    }})

  const onClick = (e:any)=>{
    setPopupBase(e.features[0])
    if(!popupData){
      getDatum()
    }else{
      refetchDatum && refetchDatum({
        id: popupBase.id,
        year 
      })
    }
  }

  useEffect(()=>{
    if(popupData){
      setPopup({ 
        location:{
          longitude: getCentroid(popupBase.geometry).geometry.coordinates[0],
          latitude: getCentroid(popupBase.geometry).geometry.coordinates[1]
        },
        properties: popupData['synthetic_blocks'][0]
      })
    }
  },[popupData])
  
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

  return <>
    <Source 
      id='synthetic_blocks'
      type="vector"
      tiles={[`https://spatialtech.herokuapp.com/http://dev.spatialtech.info:3003/public.vancouver_x_property_tax_blocks_geom/{z}/{x}/{y}.pbf`]}
      volatile={true}
      promoteId='id'
    />
    <Layer 
      id='synthetic_blocks_extrusion'
      type="fill-extrusion"
      source='synthetic_blocks'
      source-layer='public.vancouver_x_property_tax_blocks_geom'
      paint={{
        "fill-extrusion-height": extrude,
        "fill-extrusion-height-transition": {
          "duration": 300,
          "delay": 0
        },
        "fill-extrusion-color": paintProperty,
        'fill-extrusion-opacity': 1
      }}
      onHover={onHover}
      onLeave={onLeave}
      // onClick={onClick}
      before='road-label'
    /> 
    {
      ['rent', 'price'].map((l:any,i:any)=>
        <PaintDataLayer 
          dataType='bigint'
          dataLayerKey={mode}
          source='synthetic_blocks'
          sourceLayer='public.synthetic_blocks'
          {...{setPaintProperty, extrude, setExtrude}}
          key={i} visible />
      )
    }
    {hoveredStateId && <FeatureState id={hoveredStateId||''} source='synthetic_blocks' sourceLayer='public.synthetic_blocks' state={{ hover: true }} />}

  </>
}
