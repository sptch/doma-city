import { useState, useRef } from 'react'
import { useRecoilState } from 'recoil'
import { atoms } from 'misc'
import MapGL from '@urbica/react-map-gl'
import MapDataLayer from './MapDataLayer'
import Popup from './Popup'
import { Typography } from '@material-ui/core'

export default ()=>{
  const [viewport, setViewport] = useState({ latitude: 49.2827, longitude:  -123.1207, zoom:11 });
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
        pitch={60}
        hash
        bearing={32}
        onClick={()=>setPopup(null)}
        viewportChangeMethod="flyTo"
        {...viewport}
      >
        <MapDataLayer {...{setCursor}}/>
      </MapGL>
      <div style={{
        display:'flex',
        justifyContent:'space-between',
        width:'8rem',
        height:'1rem',
        position:'absolute',
        top:'2rem',
        right:'1rem',
        borderRadius:'0.5rem',
        padding: '0 0.5rem',
        boxSizing:'border-box',
        background: 'linear-gradient(to right,rgb(150, 209, 216), rgb(129, 204, 197), rgb(103, 180, 186), rgb(95, 143, 197), rgb(80, 140, 62), rgb(121, 146, 28), rgb(171, 161, 14), rgb(223, 177, 6), rgb(243, 150, 6), rgb(236, 95, 21), rgb(190, 65, 18), rgb(138, 43, 10), rgb(138, 43, 10))'
      }}>
        {[0,5,10].map(v=><Typography variant='body2' style={{color:'white', fontSize:'0.8rem'}}>{v}</Typography>)}
      </div>
    </div>
  );
}