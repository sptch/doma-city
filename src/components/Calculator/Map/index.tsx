import { useState, useRef, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { atoms, useLayout } from 'misc'
import MapGL, { MapContext } from '@urbica/react-map-gl'
import MapDataLayer from './MapDataLayer'
import { Map } from 'mapbox-gl'
import { useWindowSize } from 'react-use-size'

export default ()=>{
  const [viewport, setViewport] = useState({ latitude: 49.248, longitude:  -123.1663, zoom:11.69 });
  const [loaded, setLoaded] = useState(false)
  const [cursor, setCursor] = useState("")
  const [popup, setPopup] = useRecoilState<any>(atoms.popup);
  const mapRef:any = useRef()

  return (<div>

      <MapGL
        style={{ position:'absolute', top:0,bottom:0,left:0,right:0, border:"none", outline: "none" }}
        mapStyle="mapbox://styles/switch9/ckqvo76kj208918qpd45p0l85"
        accessToken={'pk.eyJ1Ijoic3dpdGNoOSIsImEiOiJjamozeGV2bnkxajV2M3FvNnpod3h4ODlpIn0.CTt2IXV8II6finbTlxEddg'}
        onViewportChange={setViewport}
        onLoad={()=>{setLoaded(true)}}
        cursorStyle={cursor}
        ref={mapRef}
        onClick={()=>setPopup(null)}
        viewportChangeMethod="flyTo"
        maxZoom={16}
        dragPan={false}
        dragRotate={false}
        scrollZoom={false}
        doubleClickZoom={false}
        boxZoom={false}
        bounds={[
          [-123.25021, 49.2848],
          [-123.0189, 49.1988]
        ]}
        // trackResize={true}
        {...viewport}
      >
        <MapContext.Consumer>{(map:Map)=><MapDataLayer {...{map}}/>}</MapContext.Consumer>
        <MapContext.Consumer>{(map:Map)=><FitVancouver {...{map}}/>}</MapContext.Consumer>
      </MapGL>
    </div>
  );
}

function FitVancouver ({map}:{map:Map}) {
  const {width,height} = useWindowSize()
  const layout = useLayout()
  const offset = layout==='desktop'? 50: 0
  useEffect(()=>{
    if(map){
      map.fitBounds([
        [-123.25021, 49.2848],
        [-123.0189, 49.1988]
      ], {
        padding: {
          top: offset,
          bottom: offset,
          left: offset,
          right: offset
        }
      })
    }
  },[map, width, height])
  
  return null
}