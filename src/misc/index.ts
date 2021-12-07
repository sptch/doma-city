import { useEffect, useState } from 'react'

export * as atoms from './recoil/atoms'
export * as queries from './generativeQueries'
export * from './interpolateColor'
export { default as otherLayers } from './sources.json'
export * from './types'


// React hook to get window width
export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width
}