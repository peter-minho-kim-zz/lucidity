import React from 'react'
import DreamList from './DreamList'
import DreamListFilters from './DreamListFilters'
import DreamViewSummary from './DreamViewSummary'

const DreamsPage = () => (
  <div className="buffer-wrapper">
    <div className="wrapper">
      <DreamViewSummary />
      <DreamListFilters />
      <DreamList />
    </div>
  </div>
)

export default DreamsPage