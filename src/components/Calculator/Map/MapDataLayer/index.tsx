import { Source, Layer } from '@urbica/react-map-gl'
import { useRecoilState } from 'recoil'
import { atoms } from 'misc'

export default function MapDataLayer ({setCursor}:any) {
  const [year] = useRecoilState(atoms.year)
  const [mode] = useRecoilState(atoms.mode)
  console.log(mode)
  return <>
    <Source 
      id='points'
      type="vector"
      tiles={[`https://spatialtech.herokuapp.com/http://dev.spatialtech.info:3003/calculator.blocks_data_merged/{z}/{x}/{y}.pbf`]}
      volatile={true}
      promoteId='id'
    />
    <Layer 
      id='heatmap'
      type="heatmap"
      source='points'
      source-layer='calculator.blocks_data_merged'
      paint={{
        "heatmap-color": [
          "interpolate",
          ["linear"],
          ["heatmap-density"],
          ...['rgba(150, 209, 216,0)','rgba(150, 209, 216,0.1)','rgb(150, 209, 216)', 'rgb(129, 204, 197)', 'rgb(103, 180, 186)', 'rgb(95, 143, 197)', 'rgb(80, 140, 62)', 'rgb(121, 146, 28)', 'rgb(171, 161, 14)', 'rgb(223, 177, 6)', 'rgb(243, 150, 6)', 'rgb(236, 95, 21)', 'rgb(190, 65, 18)', 'rgb(138, 43, 10)', 'rgb(138, 43, 10)']
            .map((v,i,a)=>[i/(a.length-1)*1, v])
            .flat()
        ],
        'heatmap-radius': [
          'interpolate',
          ['linear'],
          ['zoom'],
          0, 1,
          7, 8,
          8, 16,
          9, 18,
          10, 20,
          11, 22,
          12, 28,
          13, 56,
          14, 112,
          15, 224,
          16, 448
        ],
        'heatmap-intensity': [
          'interpolate',
          ['linear'],
          ['zoom'],
          0,0.01,
          8, 0.1,
          9,0.4,
          10,1.5,
          11, 4.5,
          12, 9

        ],
        'heatmap-weight': [
          'interpolate',
          ['linear'],
          ['get', mode+'_pm'],
          0, 0,
          1, 0.04
        ],
        'heatmap-opacity': 0.8
      }}
      before='road-label'
      filter={['==',['get', 'year'], year]}
    /> 
    {/* {
      ['rent', 'price'].map((l:any,i:any)=>
        <PaintDataLayer 
          dataType='bigint'
          dataLayerKey={mode}
          source='synthetic_blocks'
          sourceLayer='public.synthetic_blocks'
          {...{setPaintProperty}}
          key={i} visible={l===mode} />
      )
    } */}
  </>
}
