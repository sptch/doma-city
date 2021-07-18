import { atom } from 'recoil';
import { TableType } from '../types/types'

export const tilejson = atom({
  key: 'tilejson', 
  default: {}, 
});

export const dataLayersNames = atom({
  key: 'dataLayersNames', 
  default: ['vancouver_x_property_tax_parcels_geom', 'vancouver_x_property_tax_blocks_geom'] 
});

export const dataLayers = atom({
  key: 'dataLayers', 
  default: {}, 
});

export const tileLayers = atom({
  key: 'tileLayers', 
  default: {}, 
});

export const taxesYear = atom({
  key: 'taxesYear', 
  default: '2006', 
});

export const legendData = atom({
  key: 'legendData', 
  default: [], 
});

export const popup = atom({
  key: 'popup', 
  default: null, 
});

export const chartDatasets = atom({
  key: 'chartDatasets', 
  default: {} as {[name:string]:TableType}, 
});

export const mode = atom({
  key: 'mode', 
  default: 'rent' as 'rent'|'price', 
});

export const year = atom({
  key: 'year', 
  default: 2020, 
});

export const income = atom({
  key: 'income', 
  default: 0.5, 
});
