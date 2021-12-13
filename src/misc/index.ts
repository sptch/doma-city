import { useEffect, useState } from 'react'
import { useWindowSize } from 'react-use-size';

export * as atoms from './recoil/atoms'
export * as queries from './generativeQueries'
export * from './interpolateColor'
export { default as otherLayers } from './sources.json'
export * from './types'



export function useLayout(){
  const { width, height } = useWindowSize()
  return (width<960)? 'mobile': 'desktop'
}