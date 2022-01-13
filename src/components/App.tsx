import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useLayout } from 'misc'
import { slide as Menu } from 'react-burger-menu'

import Contact from './Contact'
import Header from './Header'
import Introduction from './Introduction'
import SmartContract from './SmartContract'
import { Content } from './styles'
import Vancouver from './Vancouver'
import Calculator from './Calculator'
import { useWindowSize } from 'react-use-size'
import Methodology from './Methodology'

export default function Doma() {
  const theme = {}
  const layout =  useLayout()
  const {width, height} = useWindowSize()
  return <>
    <ThemeProvider {...{theme:{...theme, layout}}} >
      <Router>
        <Switch>
          <Route path='/' exact>
            <Header/>
            <Content>
              <SmartContract/>
              <Introduction/>
              <Contact/>
            </Content>
          </Route>
          <Route path='/vancouver' exact>
            <Header vancouver/>
            <Content>
              <Vancouver/>
            </Content>
          </Route>
          <Route path='/vancouver/dashboard' exact>
            <Header vancouver/>
            <Content>
              <Calculator/>
            </Content>
          </Route>
          <Route path='/vancouver/methodology' exact>
            <Methodology/>
          </Route>
        </Switch>

      </Router>

    </ThemeProvider>

  </>
}
