import { atom } from 'recoil';
import { isNullishCoalesce } from 'typescript';

export const tilejson = atom({
  key: 'tilejson', 
  default: {}, 
});

export const selectedLayers = atom({
  key: 'selectedLayer', 
  default: {}, 
});