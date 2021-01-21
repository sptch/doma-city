import { atom } from 'recoil';
import { isNullishCoalesce } from 'typescript';

export const tilejson = atom({
  key: 'tilejson', 
  default: {}, 
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