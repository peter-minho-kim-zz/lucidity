import React from 'react'
import { connect } from 'react-redux'
import getVisibleDreams from '../selectors/dreams'
import hoursSleptTotal from '../selectors/hoursSlept-total'

const DreamViewSummary = ({ dreamCount, hoursSleptTotal }) => {
  const dreamCountWord = dreamCount === 1 ? 'dream' : 'dreams'
  const hoursSleptWord = hoursSleptTotal === 1 ? 'hour' : 'hours'
  return (
    <div>
      <h2>Viewing {dreamCount} {dreamCountWord} during {hoursSleptTotal} {hoursSleptWord} of sleep</h2>
    </div>
  )
}

const mapStateToProps = (state) => {
  const visibleDreams = getVisibleDreams(state.dreams, state.filters)

  return {
    dreamCount: visibleDreams.length,
    hoursSleptTotal: hoursSleptTotal(visibleDreams)
  }
}

export default connect(mapStateToProps)(DreamViewSummary)