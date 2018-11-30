import React from 'react'
import Charts from './Charts'
import Stats from './Stats'

const DashboardPage = () => (
  <div className="buffer-wrapper">
    <div className="wrapper">
      <Stats />
      <Charts />
    </div>
  </div>
)

export default DashboardPage