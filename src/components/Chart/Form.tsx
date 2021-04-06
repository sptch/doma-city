import React, { useMemo, useState } from 'react';
import {TextField, Select, MenuItem, InputLabel, Typography, Button } from '@material-ui/core'
import { ArrowDropDown, Close } from '@material-ui/icons'

export default function Form ({year, setYear, yAxis, setYAxis, xAxis, setXAxis, coeffX, setCoeffX, coeffY, setCoeffY, fields}:any){

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
            value={year}
            style={{width:'100%'}}
            IconComponent={()=><ArrowDropDown fontSize='small' style={{color:'white', marginLeft:'-1.3rem', marginTop:'-0.2rem'}}/>}
            SelectDisplayProps={{style:{backgroundColor:'rgba(255,255,255,0.05)', border:'solid 1px rgba(255,255,255,0.2)', marginBottom:'0.5rem'}}}
            onChange={(event:any)=>{if(event.target.value && !isNaN(event.target.value)) setYear(event.target.value) }} 
            label="Dataset"
          >
            {[...Array(12)].map((v,i) => 
              <MenuItem 
                style={{textTransform:"capitalize", display:'block', minHeight:'1.5rem',width:'100%'}} 
                key={i}               
                value={i+2009}>
                    <Typography variant="body2" component="div" style={{display:'block', paddingLeft:'1rem', marginTop: '0.2rem', textTransform:"capitalize"}}>
                      Numbeo world cities
                    </Typography>
              </MenuItem>)}
          </Select>
        </div>
        <div style={{display:'block', textTransform:"capitalize", paddingLeft:'0.05rem', width:'15.5%'}}>
          <InputLabel id="Year" 
            style={{fontSize:'0.8rem', color:'rgba(255,255,255,0.8)'}} 
          >Year</InputLabel>
          <Select
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
            {fields.filter((d:any)=>d!==xAxis).map((v:any, i:number) => 
              <MenuItem 
                style={{textTransform:"capitalize", display:'block', minHeight:'1.5rem'}} 
                key={i} value={v}>
                  <Typography variant="body2" component="div" style={{width:'100%',display:'block', paddingLeft:'1rem', marginTop: '0.2rem', textTransform:"capitalize"}}>
                    {v.replaceAll('_', ' ')}
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
            {fields.filter((d:any)=>d!==yAxis).map((v:any,i:number) => 
              <MenuItem 
                style={{width:'100%',textTransform:"capitalize", display:'block', minHeight:'1.5rem'}} 
                key={i} value={v}>
                  <Typography variant="body2" component="div" style={{display:'block', paddingLeft:'1rem', marginTop: '0.2rem', textTransform:"capitalize"}}>
                    {v.replaceAll('_', ' ')}
                  </Typography>
              </MenuItem>)}
          </Select>
        </div>
      </div>
    </form>
  </div>
}