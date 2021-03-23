import React from 'react';
import Map from './Map'
import Dashboard from './Dashboard'
import Legend from './Legend'
import Timeline from './Timeline'
import Chart from './Chart'

export default ()=>{
  return (
    <div className="App">
      <Map/>
      <Dashboard />
      {/* <Legend /> */}
      <Chart />
      {/* <Timeline /> */}
    </div>
  );
}