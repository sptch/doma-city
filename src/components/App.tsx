import React from 'react';
import Map from './Map'
import Dashboard from './Dashboard'
import Legend from './Legend'

export default ()=>{
  return (
    <div className="App">
      <Map/>
      <Dashboard />
      <Legend />
    </div>
  );
}