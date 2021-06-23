import { useState, useRef } from 'react'
import { useRecoilState } from 'recoil'
import { atoms } from 'misc'
import MapGL from '@urbica/react-map-gl'
import MapDataLayer from './MapDataLayer'
import Popup from './Popup'

export default ()=>{
  const [viewport, setViewport] = useState({ latitude: 49.2827, longitude:  -123.1207, zoom:11 });
  const [loaded, setLoaded] = useState(false)
  const [cursor, setCursor] = useState("")
  const [popup, setPopup] = useRecoilState<any>(atoms.popup);
  const mapRef:any = useRef()

  return (
    <MapGL
      style={{ position:'absolute', top:0,bottom:0,left:0,right:0, border:"none", outline: "none" }}
      mapStyle="mapbox://styles/switch9/ckkieifou0spf17mq1ts2lpve"
      accessToken={'pk.eyJ1Ijoic3dpdGNoOSIsImEiOiJjamozeGV2bnkxajV2M3FvNnpod3h4ODlpIn0.CTt2IXV8II6finbTlxEddg'}
      onViewportChange={setViewport}
      onLoad={()=>{setLoaded(true)}}
      cursorStyle={cursor}
      ref={mapRef}
      pitch={60}
      bearing={32}
      onClick={()=>setPopup(null)}
      viewportChangeMethod="flyTo"
      {...viewport}
    >
      { popup && <Popup {...popup} /> }
      <MapDataLayer {...{setCursor}}/>
    </MapGL>
  );
}