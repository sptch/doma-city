import { Route, HashRouter as Router } from 'react-router-dom'
import Datasets from './Datasets'
import Calculator from './Calculator'
import Doma from './Doma'
import { ThemeProvider } from 'styled-components'
import { useLayout } from 'misc'

export default ()=>{
  const theme = {}
  const layout =  useLayout()
  return (
    <ThemeProvider {...{theme:{...theme, layout}}} >
      <Doma/>
    </ThemeProvider>
  )
}