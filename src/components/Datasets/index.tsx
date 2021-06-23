import Map from './Map'
import Dashboard from './Dashboard'
import Timeline from './Timeline'
import Chart from './Chart'

export default ()=>{
  return (
    <div className="Datasets">
      <Map/>
      <Dashboard />
      <Chart />
    </div>
  )
}