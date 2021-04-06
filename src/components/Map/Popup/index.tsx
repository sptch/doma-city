import React, { useState } from 'react'
import { Popup } from '@urbica/react-map-gl'
import { useRecoilState } from 'recoil'
import { Typography, Link, Button } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import * as Atoms from 'misc/Atoms'
import * as d3 from 'd3-format'

const format:any = d3.format(".4")

export default ()=>{
  const [crossColor, setCrossColor] = useState('#999999')
  const [popup, setPopup] = useRecoilState<any>(Atoms.popup);

  return <Popup {...popup.location} maxWidth='fit-content' className="custom-popup" closeButton={false} closeOnClick={false}>
  <Button 
    size='small'
    onClick={()=>setPopup(null)} 
    className="Close-popup"
    style={{
      right:'1rem',
      top:'1rem',
      minWidth:'0.8rem',
      position:'absolute'}}>
    <Close fontSize='small' />
  </Button>
  <div style={{padding:'0.5rem', paddingRight:'2rem', textTransform:"capitalize"}}>
    {Object.entries({...popup.properties})
    .map(([key,value]:any)=>[
      key.replaceAll('_',' ').toLowerCase(), 
      typeof(value)==='string' && value.includes('http')?
        value:typeof(value)==='string'?
        value.toLowerCase():value])
    .filter(([key, value]:any)=>key!=='id'&&value!==null&&value!==0)
    .sort((a:any,b:any)=>{
      var nameA = b[0].replaceAll('_',' ').toUpperCase(); // ignore upper and lowercase
      var nameB = a[0].replaceAll('_',' ').toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
    .sort((a:any, b:any)=>typeof(a[1])==="string" && a[1].includes('http')?1:-1)
    .map(([key, value]:any, k:number)=><div style={{display:'block'}} key={k}>
      {typeof(value)==="string" && value.includes('http') ? 
        <Link href={value} variant="body2" style={{fontWeight: 'bold'}}>{key}</Link>:
        <>
          <Typography variant="body2" style={{display:'inline-block', fontWeight: 'bold'}}>{key+': '}</Typography>
          <Typography variant="body2" style={{display:'inline-block', paddingLeft:'1rem'}}>{typeof(value)==="number"&& !key.includes('coord')?format(value):value}</Typography>
        </>
      }
    </div>)}
  </div>
</Popup>
}