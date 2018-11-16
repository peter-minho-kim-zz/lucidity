import React from 'react'
import { connect } from 'react-redux'
import DreamListItem from './DreamListItem'  
import getVisibleDreams from '../selectors/dreams'

export const DreamList = (props) => (
  <div>
    {
      props.dreams.length === 0 ? (
        <p>No dreams</p>
      ) : (
        props.dreams.map((dream) => {
          return <DreamListItem key={dream.id} {...dream} />
        })
      )
    }

  </div>
)

const mapStateToProps = (state) => {
  return {
    dreams: getVisibleDreams(state.dreams, state.filters)
  }
}

export default connect(mapStateToProps)(DreamList)

