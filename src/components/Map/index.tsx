import React, { useState, useRef, useEffect } from 'react'
import MapGL from '@urbica/react-map-gl'
import { useRecoilState } from 'recoil'
import * as Atoms from 'components/Atoms'
// import 'mapbox-gl/dist/mapbox-gl.css'
import MapLayer from './MapLayer'
import MapDataLayer from './MapDataLayer'
import Popup from './Popup'

export default ()=>{
  const [viewport, setViewport] = useState({ latitude: 49.2827, longitude:  -123.1207, zoom:11 });
  const [loaded, setLoaded] = useState(false)
  const [cursor, setCursor] = useState("")
  const [layers, setLayers] = useRecoilState<object>(Atoms.tileLayers);
  const [tilejson, setTilejson] = useRecoilState<object>(Atoms.tilejson);
  const [popup, setPopup] = useRecoilState<any>(Atoms.popup);
  const [dataLayersNames] = useRecoilState<any>(Atoms.dataLayersNames)

  const mapRef:any = useRef()

  useEffect(()=>{
    fetch("https://spatialtech.herokuapp.com/http://dev.spatialtech.info:3003/index.json")
    .then(d=>d.json())
    .then(d=>{
      let fetchedTilejson: {[k: string]: any} = {}
      let fetchedLayers: {[k: string]: any} = {}
      Object.keys(d)
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
      }).forEach((key, i)=>{
        if(key.includes('public')){
          const filteredProp = Object.keys(d[key].properties)
            .filter(key => key.charAt(0)!=="_" && key.substr(0,2).toLocaleLowerCase()!=="id" && key.substr(0,2).toLocaleLowerCase()!=="id" && key!=="report_year")
            .reduce((obj:any, k:any) => {
              obj[k] = d[key].properties[k];
              return obj;
            }, {});
          fetchedTilejson[key.replace('public.','')] = {...d[key], properties:filteredProp}
          fetchedLayers[key.replace('public.','')] = i===0
        }
      })
      setTilejson(fetchedTilejson)
      setLayers(fetchedLayers)
    })
  },[])

  return (
    <MapGL
      style={{ position:'absolute', top:0,bottom:0,left:0,right:0, border:"none", outline: "none" }}
      mapStyle="mapbox://styles/switch9/ckahu5spr0amr1ik3n1fg0fvt"
      accessToken={'pk.eyJ1Ijoic3dpdGNoOSIsImEiOiJjamozeGV2bnkxajV2M3FvNnpod3h4ODlpIn0.CTt2IXV8II6finbTlxEddg'}
      onViewportChange={setViewport}
      onLoad={()=>{setLoaded(true)}}
      cursorStyle={cursor}
      ref={mapRef}
      hash={true}
      onClick={()=>setPopup(null)}
      {...viewport}
    >
      { popup && <Popup {...popup} /> }
      {
        (Object.entries(layers) as Array<keyof typeof layers>)
        ?.map((layer, i)=><React.Fragment key={i}>
          { layer[0]!=="property_tax_report__parcels" && layer[0]!=="property_tax_report__blocks" ?
            <MapLayer {...{setCursor, layerKey: layer[0], property: layer[1], visible:Boolean(layer[1]), i}}/>:
            <MapDataLayer {...{setCursor, layerKey: layer[0], property: layer[1], visible:Boolean(layer[1]), i}}/> }
        </React.Fragment>
        )
      }
      
    </MapGL>
  );
}