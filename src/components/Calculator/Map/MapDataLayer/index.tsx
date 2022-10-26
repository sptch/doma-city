import { Source, Layer } from '@urbica/react-map-gl'
import { useRecoilState } from 'recoil'
import { atoms } from 'misc'
import { useEffect, useState } from 'react'
import { Map } from 'mapbox-gl'
import blocks from 'data/blocks.json'
import blocksData from 'data/blocks_data.json'
const values =  Object.values(blocksData).flat()
const minPrice = Math.min(...values.map(v=>v.price))
const maxPrice = Math.max(...values.map(v=>v.price))
const minRent = Math.min(...values.map(v=>v.rent))
const maxRent = Math.max(...values.map(v=>v.rent))

export default function MapDataLayer ({map}:{map:Map}) {
  const [year] = useRecoilState(atoms.year)
  const [mode] = useRecoilState(atoms.mode)
  const [incomeAspect] = useRecoilState(atoms.incomeAspect)

  const [frame, setFrame] = useState([0,1])

  useEffect(()=>{
    const relevant = blocksData
      ?.[(year||2022) as unknown as keyof typeof blocksData] as {
        id: number;
        price: number;
        rent: number;
      }[];
    
    relevant.forEach((v)=>{
      if(mode==='rent'){
        setFrame([minRent,maxRent])
      }else{
        setFrame([minPrice,maxPrice])
      }

      // value = (value - min[key])/(max[key]-min[key])
      map.setFeatureState({
        source: 'points', 
        id: v.id
      }, { value: v[mode] })
    })
    
  },[map, year, mode])


  return <>
    <Source 
      id='points'
      type="geojson"
      data={blocks as GeoJSON.FeatureCollection}
      // volatile={true}
      promoteId='id'
    />
    <Layer 
      id='heatmap'
      type="heatmap"
      source='points'
      paint={{
        "heatmap-color": [
          "interpolate",
          ["linear"],
          ["heatmap-density"],
            0,'rgba(150, 209, 216,0)',
            0.05, 'rgba(150, 209, 216,1)',
            0.1, 'rgb(150, 209, 216)', 
            0.15, 'rgb(129, 204, 197)',
            0.2, 'rgb(103, 180, 186)',
            0.3, 'rgb(95, 143, 197)',
            0.4, 'rgb(80, 140, 62)',
            0.5, 'rgb(121, 146, 28)', 
            0.6, 'rgb(171, 161, 14)', 
            0.7, 'rgb(223, 177, 6)', 
            0.8, 'rgb(243, 150, 6)', 
            0.85, 'rgb(236, 95, 21)', 
            0.99, 'rgb(190, 65, 18)', 
            0.995, 'rgb(138, 43, 10)', 
            1, 'rgb(138, 43, 10)'
        ],
        'heatmap-radius': [
          'interpolate',
          ['exponential', 2],
          ['zoom'],
          7,0.5,
          10,6.2,
          12,28,
          // 13.4,16,
          // 14.5,35,
          13,50,
          // 16,100,
          17,800
      ],
        'heatmap-intensity': 2*
        (incomeAspect<0?
          (1*Math.abs(incomeAspect-1)):
          (1/Math.pow( Math.abs(-incomeAspect-1), 3))
        ),
        'heatmap-weight': [
          'interpolate',
          ['linear'],
          ['feature-state','value'],
          frame[0], (mode==='rent'?0.05:0.4),
          frame[1], (mode==='rent'?1:4)
        ],
        'heatmap-opacity': 0.8
      }}
      before='road-label'
    /> 
  </>
}
