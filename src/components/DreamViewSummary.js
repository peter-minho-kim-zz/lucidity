import React from 'react'
import { connect } from 'react-redux'
import getVisibleDreams from '../selectors/dreams'
import hoursSleptTotal from '../selectors/hoursSlept-total'

const DreamViewSummary = ({ dreamCount, hoursSleptTotal }) => {
  // Set plural wording for dream list viewer
  const dreamCountWord = dreamCount === 1 ? 'dream' : 'dreams'
  const hoursSleptWord = hoursSleptTotal === 1 ? 'hour' : 'hours'
  return (
    <div className="dream-view-summary u-margin-bottom-small fade-in-bottom">
      <p className="dream-view-summary__text">Viewing {dreamCount} {dreamCountWord} during {hoursSleptTotal} {hoursSleptWord} of sleep</p>
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