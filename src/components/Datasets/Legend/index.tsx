import { Fragment } from 'react'
import { Box, Typography } from '@material-ui/core'
import { useRecoilState } from 'recoil'
import { atoms } from 'misc'

export default ()=>{
  const [legendData, setLegendData] = useRecoilState<any>(atoms.legendData)
  const [layers, setLayers] = useRecoilState<any>(atoms.tileLayers)
  const [tilejson, setTilejson] = useRecoilState<any>(atoms.tilejson);

  return Object.entries(legendData).length>0 ? (
    <Box 
      style={{
        minWidth: '100px', 
        minHeight: '50px',
        // maxHeight: 'calc( 100vh - 4rem )',
        overflowY: 'scroll',
        zIndex: 2,
        position:'absolute',
        left: '1rem',
        bottom: '1rem',
        display: 'block',
        backgroundColor:'#081217' ,
        boxShadow: "-15px 15px 15px rgba(0,0,0,0.2)",
        textAlign: 'left',
        padding: '1rem',
        borderRadius: '0.5rem'
      }}>
        {Object.entries(legendData)
        .sort(([layer, data]:any)=>layer)
        .map(([layer, data]:any, i:number)=><Fragment key={i}>
          <Typography
            variant="body1"
            style={{
              textTransform:"capitalize",
              paddingTop:'0.3rem'
            }}>
              {layer.replaceAll('_',' ')+':'}
          </Typography>
          {layers[layer] && typeof(layers[layer])==="string" && <Typography
            variant="caption"
            style={{
              textTransform:"capitalize",
              paddingTop:'1rem'
            }}>
              {layers[layer].replaceAll('_',' ')}
          </Typography>}
          {[...data].reverse().map(([value, color]:any, n:number)=><Fragment key={n}>
            <div style={{ display:'block', paddingTop:'0.2rem' }}>
              {
                tilejson[layer].geometry_type.toUpperCase()==="POLYGON"  ||
                tilejson[layer].geometry_type.toUpperCase()==="MULTIPOLYGON"?
                  <div style={{
                    backgroundColor:color,
                    width:'0.8rem',
                    height:'0.8rem',
                    display:'inline-block'
                  }}/>:
                tilejson[layer].geometry_type.toUpperCase()==="POINT"||
                tilejson[layer].geometry_type.toUpperCase()==="MULTIPOINT"?
                  <div style={{
                    backgroundColor:color,
                    width:'0.8rem',
                    height:'0.8rem',
                    borderRadius:'0.4rem',
                    display:'inline-block'
                  }}/>:
                  <div style={{
                    borderColor:color,
                    width:'0.8rem',
                    height:'0.8rem',
                    display:'inline-block'
                  }}/>
      
              }
              <Typography variant="body2" component="div" style={{display:'inline-block', paddingLeft:'1rem', textTransform:"capitalize"}}>
                { isNaN(value)?
                    ''+value?.toLowerCase():
                    // value===0?
                    // <>No data</>:
                    <>  over {value} {layers && typeof(layers[layer])==="string" && layers[layer].includes('value')?<><div style={{display:'inline-block', textTransform:"none"}}>CAD/m<sup>2</sup></div></>:<></>}</>
                }
              </Typography>
            </div>
          </Fragment>)}
        </Fragment>)}
    </Box>
  ):null
}