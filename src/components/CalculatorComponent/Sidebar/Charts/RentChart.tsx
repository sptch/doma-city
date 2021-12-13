import Chart from "./Chart";
import { useRentsHistoricalQuery } from 'generated'
import { Entries } from "misc";
import { useEffect, useState } from "react";

export function RentChart({ height=350, width=350 }){

  const { data:raw } = useRentsHistoricalQuery()
  const [data, setData] = useState<Entries>() 

  useEffect(()=>{
    if(raw){
      setData(
        Object.entries({
          ...raw, 
          incomes: raw?.incomes
            .map(v=>({...v, data:v.data/12}))||[]
        }).map(v=>({
            key:v[0],
            data:v[1]
          })) 
      )
    }
  },[raw])

  return data ? <Chart {...{height, width, data}}/>:null
}

