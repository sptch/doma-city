import { SetterOrUpdater } from 'recoil'

export type FormType = {
  dataset:string, 
  setDataset:SetterOrUpdater<string>, 
  setDatasetsUnfiltered:SetterOrUpdater<any>, 
  year:number, 
  setYear:SetterOrUpdater<number>, 
  yAxis:string, 
  setYAxis:SetterOrUpdater<string>, 
  xAxis:string, 
  setXAxis:SetterOrUpdater<string>, 
  coeffX:number, 
  setCoeffX:SetterOrUpdater<number>, 
  coeffY:number, 
  setCoeffY:SetterOrUpdater<number>, 
}

type Field = {name:string, type:{name:string}}

export type TableType = {
  fields: {0:Field,1:Field}&[Field] 
}

export type Entries = {
  key: string|number
  data: {key:number, data:number}[]
}[]
