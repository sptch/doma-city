import Chart from "./Chart";
import { usePricesHistoricalQuery } from 'generated'
import { useEffect, useState } from "react";
import { Entries } from "misc";

export function PriceChart({ height=350, width=350 }){
  const { data:raw } = usePricesHistoricalQuery()
  const [data, setData] = useState<Entries>() 

  useEffect(()=>{
    if(raw){
      setData(
        Object.entries({
          ...raw, 
          incomes: raw?.incomes
            .map(v=>({...v, data:v.data*4.5}))||[]
        }).map(v=>({
          key:v[0],
          data:v[1]
        })) 
      )
    }
  },[raw])

  return data ? <Chart {...{height, width, data}}/>: null
}


