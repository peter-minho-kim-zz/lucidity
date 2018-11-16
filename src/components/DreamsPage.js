import React from 'react'
import DreamList from './DreamList'
import DreamListFilters from './DreamListFilters'
import DreamViewSummary from './DreamViewSummary'

const DreamsPage = () => (
  <div>
    <DreamViewSummary />
    <DreamListFilters />
    <DreamList />
  </div>
)

export default DreamsPage