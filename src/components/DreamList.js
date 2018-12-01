import React from 'react'
import { connect } from 'react-redux'
import DreamListItem from './DreamListItem'  
import getVisibleDreams from '../selectors/dreams'

class DreamList extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // Remove fade-in-bottom animation class to avoid conflict with calendar
    setTimeout(() => {
      this.refs.dreamList.classList.remove('fade-in-bottom')
    }, 1200)
  }
  render() {
    return (
      <div className="dream-list fade-in-bottom" ref="dreamList">
        {
          this.props.dreams.length === 0 ? (
            <p className="form__error">No dreams</p>
          ) : (
              this.props.dreams.map((dream) => {
                return <DreamListItem key={dream.id} {...dream} />
              })
            )
        }

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dreams: getVisibleDreams(state.dreams, state.filters)
  }
}

export default connect(mapStateToProps)(DreamList)

