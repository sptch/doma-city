import * as d3 from 'd3-scale-chromatic'

export function interpolateColor(v:number, numeric:boolean=true){
  return numeric? 
    d3.interpolatePlasma(v):
    d3.interpolateWarm(v)
}
