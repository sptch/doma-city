import { Route, BrowserRouter as Router } from 'react-router-dom'
import Datasets from './Datasets'
import Calculator from './Calculator'

export default ()=>{
  return <Router>
    <Route path='/calculator'>
      <Calculator/>
    </Route>
    <Route path='/' exact>
      <Datasets/>
    </Route>
  </Router>
}