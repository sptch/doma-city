import React from 'react';
import Map from './Map'
import Dashboard from './Dashboard'
import Legend from './Legend'
import Timeline from './Timeline'

export default ()=>{
  return (
    <div className="App">
      <Map/>
      <Dashboard />
      <Legend />
      {/* <Timeline /> */}
    </div>
  );
}