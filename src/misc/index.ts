import { useEffect, useLayoutEffect, useState } from 'react'
import { useWindowSize } from 'react-use-size';

export * as atoms from './recoil/atoms'
export * as queries from './generativeQueries'
export * from './interpolateColor'
export { default as otherLayers } from './sources.json'
export * from './types'



export function useLayout(){
  const { width, height } = useWindowSize()
  return (width<768)? 'mobile': 'desktop'
}

export default function useWindowPosition() {
  const [scrollPosition, setPosition] = useState(0);
  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);
  return scrollPosition;
}