import { atom } from 'recoil';

export const mode = atom({
  key: 'mode', 
  default: 'rent' as 'rent'|'price', 
});

export const year = atom({
  key: 'year', 
  default: 2022, 
});

export const incomeAspect = atom({
  key: 'incomeAspect', 
  default: 0, 
});

export const income = atom({
  key: 'income', 
  default: 91750, 
});

export const menu = atom({
  key: 'menu', 
  default: false, 
});
