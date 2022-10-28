import { Source, Layer } from '@urbica/react-map-gl'
import { useRecoilState } from 'recoil'
import { atoms } from 'misc'
import { useEffect, useState } from 'react'
import { Map } from 'mapbox-gl'
import blocks from 'data/blocks.json'
import blocksData from 'data/blocks_data.json'
const values =  Object.values(blocksData).flat()
// const minPrice = Math.min(...values.map(v=>v.price))
// const maxPrice = Math.max(...values.map(v=>v.price))
// const minRent = Math.min(...values.map(v=>v.rent))
// const maxRent = Math.max(...values.map(v=>v.rent))

export default function MapDataLayer ({map}:{map:Map}) {
  const [year] = useRecoilState(atoms.year)
  const [mode] = useRecoilState(atoms.mode)
  const [incomeAspect] = useRecoilState(atoms.incomeAspect)
  const [income] = useRecoilState(atoms.income)
  const [frame, setFrame] = useState<[number, number]|undefined>(undefined)
  const rentAffordabilityThreshold = income/12*0.3;
  const affordableMortgage = income*4.5
  const [sample, setSample] = useState<{id:number, price:number, rent:number}[]>([])

  useEffect(()=>{
    const relevant = (blocksData
      ?.[(year||2022) as unknown as keyof typeof blocksData] as {
        id: number;
        price: number;
        rent: number;
      }[]).sort((a,b)=>a.price-b.price);
    const samples = new Array(11).fill('').map((_,i)=>relevant[Math.floor(relevant.length/10*i)])
    setSample(samples)
    const minPrice = Math.min(...relevant.map(v=>v.price))
    const maxPrice = Math.max(...relevant.map(v=>v.price))
    const minRent = Math.min(...relevant.map(v=>v.rent))
    const maxRent = Math.max(...relevant.map(v=>v.rent))
      
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

  const offer = mode==='rent'? rentAffordabilityThreshold: affordableMortgage

  function interpolateValues(){
    if(!frame) return undefined;

    return new Array(11).fill('').map((v,i)=>{
      const value = sample?.[i]?.[mode] || (i/10) * (frame[1]-frame[0]) + frame[0]
      if(value<offer){
        return [value, (value - frame[0])/(offer-frame[0])*0.5]
      }else{
        return [value, 0.5 + (value - offer)/(Math.max(frame[1], offer)-frame[0])*0.5]
      }
    }).flat()
  }

  console.log(interpolateValues())
  return <>
    <Source 
      id='points'
      type="geojson"
      data={blocks as GeoJSON.FeatureCollection}
      // volatile={true}
      promoteId='id'
    />
    {frame && <Layer 
      id='heatmap'
      type="heatmap"
      source='points'
      paint={{
        "heatmap-color": [
          "interpolate",
          ["linear"],
          ["heatmap-density"],
            0,'rgba(150, 209, 216,0)',
            0.01,'rgb(129, 204, 197)',
            0.1, 'rgb(103, 180, 186)',
            0.2, 'rgb(95, 143, 197)',
            0.3, 'rgb(80, 140, 62)',
            0.4, 'rgb(121, 146, 28)', 
            0.5, 'rgb(171, 161, 14)',  
            0.6, 'rgb(223, 177, 6)', 
            0.7, 'rgb(243, 150, 6)', 
            0.8, 'rgb(236, 95, 21)', 
            0.9, 'rgb(190, 65, 18)', 
            1, 'rgb(138, 43, 10)'
        ],
        'heatmap-radius': [
          'interpolate',
          ['exponential', 2],
          ['zoom'],
          7,0.5,
          10,6.2,
          12,28,
          13,50,
          17,800
        ],
        'heatmap-intensity': mode==='rent'? (1 - incomeAspect+0.2): (1 - (incomeAspect*0.1)),
        'heatmap-weight': [
          'interpolate',
          ['linear'],
          ['feature-state','value'],
          ...interpolateValues()||[]
        ],
        'heatmap-opacity': 0.8
      }}
      before='road-label'
    /> }
  </>
}
