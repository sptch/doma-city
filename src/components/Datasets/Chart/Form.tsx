import { useEffect } from 'react';
import {TextField, Select, MenuItem, InputLabel, Typography } from '@material-ui/core'
import { ArrowDropDown } from '@material-ui/icons'
import { useRecoilState } from 'recoil'
import { useLazyQuery } from '@apollo/client'
import { atoms, queries, FormType, TableType } from 'misc'


export default function Form ({dataset, setDataset, setDatasetsUnfiltered, year, setYear, yAxis, setYAxis, xAxis, setXAxis, coeffX, setCoeffX, coeffY, setCoeffY}:FormType){

  const [layers, setLayers] = useRecoilState<object>(atoms.tileLayers);
  const [loadKeys, { data:keys }] = useLazyQuery(queries.getKeys(
    Object.keys(layers).length===0? [dataset]:
    Object.keys(layers).map(v=>v.replace('_geom','_data'))
  ))

  const [datasets, setDatasets] = useRecoilState(atoms.chartDatasets);

  useEffect(()=>{
    // console.log(layers)
    if(!keys && Object.keys(layers).length>0){
      loadKeys()
    }
  },[layers, keys])

  useEffect(()=>{
    console.log('keys: ', keys)
    if(keys){
        const chartDatasets = (Object.entries(keys) as [string, TableType][]).reduce((agg, v, i)=>{
          let val:any = {...agg}
          if(v[1]){
            const fields = v[1].fields.filter(v=>
              v.name.charAt(0)!=='_' &&
              v.name.slice(-2)!=='id' &&
              (
                v.type.name==="Int" || 
                v.type.name==="bigint" ||
                v.type.name==="numeric" ||
                v.type.name==="float8" ||
                v.type.name==="Float"
              )
            )
            if(fields.length>1){
              val[v[0]]={fields}
            }
          }
          return val
        },{})
        console.log(chartDatasets)
        setDatasetsUnfiltered(keys)
        setDatasets(chartDatasets)
    }
  },[keys])

  return <div>

    <form noValidate autoComplete="off" style={{ padding:'2rem', paddingRight:'1rem', display:'flex', textTransform: "capitalize", flexDirection:'column', flexWrap:'wrap' }}>
    <div style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'space-between'}}>
      <div style={{display:'block', textTransform:"capitalize", width:'50%'}}>
          <InputLabel id="Dataset" 
            style={{fontSize:'0.8rem', color:'rgba(255,255,255,0.8)'}} 
          >Dataset</InputLabel>
          <Select
            labelId="Dataset"
            id="Dataset"
            value={dataset}
            style={{width:'100%'}}
            IconComponent={()=><ArrowDropDown fontSize='small' style={{color:'white', marginLeft:'-1.3rem', marginTop:'-0.2rem'}}/>}
            SelectDisplayProps={{style:{backgroundColor:'rgba(255,255,255,0.05)', border:'solid 1px rgba(255,255,255,0.2)', marginBottom:'0.5rem'}}}
            onChange={(event:any)=>{if(event.target.value){ setDataset(event.target.value) } }} 
            label="Dataset"
          >
            {Object.keys(datasets).map((v,i) => 
              <MenuItem 
                style={{textTransform:"capitalize", display:'block', minHeight:'1.5rem',width:'100%'}} 
                key={i}               
                value={v}>
                    <Typography variant="body2" component="div" style={{display:'block', paddingLeft:'1rem', marginTop: '0.2rem', textTransform:"capitalize"}}>
                      {v.replace('_geom','').replace('_x_',' ').replaceAll('_',' ')}
                    </Typography>
              </MenuItem>)}
          </Select>
        </div>
        <div style={{display:'block', textTransform:"capitalize", paddingLeft:'0.05rem', width:'15.5%'}}>
          <InputLabel id="Year" 
            style={{fontSize:'0.8rem', color:
              !datasets[dataset]?.fields.find(v=>v.name==='year')? 
              'rgba(122,122,122,0.8)':'rgba(255,255,255,0.8)'}} 
          >Year</InputLabel>
          <Select
            disabled={!datasets[dataset]?.fields.find(v=>v.name==='year')}
            labelId="Year"
            id="Year"
            value={year}
            style={{width:'100%'}}
            onChange={(event:any)=>{if(event.target.value && !isNaN(event.target.value)) setYear(event.target.value) }} 
            label="Year"
            IconComponent={()=><ArrowDropDown fontSize='small' style={{color:'white', marginLeft:'-1.3rem', marginTop:'-0.2rem'}}/>}
            SelectDisplayProps={{style:{backgroundColor:'rgba(255,255,255,0.05)', border:'solid 1px rgba(255,255,255,0.2)', marginBottom:'0.5rem'}}}
          >
            {[...Array(12)].map((v,i) => 
              <MenuItem 
                style={{textTransform:"capitalize", display:'block', minHeight:'1.5rem', width:'100%'}} 
                key={i} 
                value={i+2009}>
                  <Typography variant="body2" component="div" style={{display:'block', paddingLeft:'1rem', marginTop: '0.2rem', textTransform:"capitalize"}}>
                    {i+2009}
                  </Typography>
              </MenuItem>)}
          </Select>
        </div>
        <div style={{display:'block', textTransform:"capitalize", width:'15.5%'}}>
          <InputLabel id="ExponentY" 
            style={{fontSize:'0.8rem', color:'rgba(255,255,255,0.8)'}} 
          >Exp Y</InputLabel>
          <TextField 
            style={{fontSize:'0.8rem', color:'rgba(255,255,255,0.8)',  minWidth:'3.5rem', marginTop:'0.75rem'}}
            id="exponentY" 
            value={coeffY}
            size='small'
            InputLabelProps={{style:{fontSize:'1rem', color:'rgba(255,255,255,0.8)'}}}
            InputProps={{style:{marginTop:'-0.75rem', maxHeight:'2.1rem', backgroundColor:'rgba(255,255,255,0.05)', color:'rgba(255,255,255,0.8)', fontSize:'0.875rem', fontWeight:300, border:'solid 1px rgba(255,255,255,0.2)', borderRadius:0, marginBottom:'0.5rem'}}}
            onChange={(event:any)=>{if(event.target.value && !isNaN(event.target.value)) setCoeffY(event.target.value) }} 
          />
        </div>
        <div style={{display:'block', textTransform:"capitalize", width:'15.5%'}}>
          <InputLabel id="ExponentX" 
            style={{fontSize:'0.8rem', color:'rgba(255,255,255,0.8)'}} 
          >Exp X</InputLabel>
          <TextField 
            style={{fontSize:'0.8rem', color:'rgba(255,255,255,0.8)', minWidth:'3.5rem', marginTop:'0.75rem'}}
            id="exponentX" 
            value={coeffX}
            size='small'
            InputLabelProps={{style:{fontSize:'1rem', color:'rgba(255,255,255,0.8)'}}}
            InputProps={{style:{marginTop:'-0.75rem', maxHeight:'2.1rem', backgroundColor:'rgba(255,255,255,0.05)', color:'rgba(255,255,255,0.8)', fontSize:'0.875rem', fontWeight:300, border:'solid 1px rgba(255,255,255,0.2)', borderRadius:0, marginBottom:'0.5rem'}}}
            onChange={(event:any)=>{if(event.target.value && !isNaN(event.target.value)) setCoeffX(event.target.value) }} 
          />
        </div>
      </div>
      <div  style={{display:'flex', flexDirection:'row', width:'100%'}}>
        <div style={{display:'block', textTransform:"capitalize", width:'50%'}}>
          <InputLabel id="Y-axis" 
            style={{fontSize:'0.8rem', color:'rgba(255,255,255,0.8)'}} 
          >Y-axis</InputLabel>
          <Select
            labelId="Y-axis"
            id="Y-axis"
            style={{width:'100%'}}
            value={yAxis}
            onChange={(event:any)=>{setYAxis(event.target.value) }} 
            label="Y-axis"
            IconComponent={()=><ArrowDropDown fontSize='small' style={{color:'white', marginLeft:'-1.3rem', marginTop:'-0.2rem'}}/>}
            SelectDisplayProps={{style:{backgroundColor:'rgba(255,255,255,0.05)', border:'solid 1px rgba(255,255,255,0.2)', marginBottom:'0.5rem'}}}
          >
            {datasets[dataset]?.fields.filter((d)=>d.name!==xAxis&&d.name!=='year').map((v, i:number) => 
              <MenuItem 
                style={{textTransform:"capitalize", display:'block', minHeight:'1.5rem'}} 
                key={i} value={v.name}>
                  <Typography variant="body2" component="div" style={{width:'100%',display:'block', paddingLeft:'1rem', marginTop: '0.2rem', textTransform:"capitalize"}}>
                    {v.name.replaceAll('_', ' ')}
                  </Typography>
              </MenuItem>)}
          </Select>
        </div>
        <div style={{display:'block', textTransform:"capitalize", marginLeft:'0.5rem', width:'50%'}}>
          <InputLabel id="X-axis" 
            style={{fontSize:'0.8rem', color:'rgba(255,255,255,0.8)'}} 
          >X-axis</InputLabel>
          <Select
            labelId="X-axis"
            id="X-axis"
            style={{width:'100%'}}
            value={xAxis}
            onChange={(event:any)=>{setXAxis(event.target.value) }} 
            label="X-axis"
            IconComponent={()=><ArrowDropDown fontSize='small' style={{color:'white', marginLeft:'-1.3rem', marginTop:'-0.2rem'}}/>}
            SelectDisplayProps={{style:{backgroundColor:'rgba(255,255,255,0.05)', border:'solid 1px rgba(255,255,255,0.2)', marginBottom:'0.5rem'}}}
          >
            {datasets[dataset]?.fields.filter((d)=>d.name!==yAxis&&d.name!=='year').map((v,i:number) => 
              <MenuItem 
                style={{width:'100%',textTransform:"capitalize", display:'block', minHeight:'1.5rem'}} 
                key={i} value={v.name}>
                  <Typography variant="body2" component="div" style={{display:'block', paddingLeft:'1rem', marginTop: '0.2rem', textTransform:"capitalize"}}>
                    {v.name.replaceAll('_', ' ')}
                  </Typography>
              </MenuItem>)}
          </Select>
        </div>
      </div>
    </form>
  </div>
}