import React from 'react'
import { connect } from 'react-redux'
import DreamListItem from './DreamListItem'  
import getVisibleDreams from '../selectors/dreams'

// export const DreamList = (props) => (
//   <div className="dream-list fade-in-bottom">
//     {
//       props.dreams.length === 0 ? (
//         <p>No dreams</p>
//       ) : (
//         props.dreams.map((dream) => {
//           return <DreamListItem key={dream.id} {...dream} />
//         })
//       )
//     }

//   </div>
// )

class DreamList extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    setTimeout(() => {
      this.refs.dreamList.classList.remove('fade-in-bottom')

    }, 1500)
  }
  render() {
    return (
      <div className="dream-list fade-in-bottom" ref="dreamList">
        {
          this.props.dreams.length === 0 ? (
            <p>No dreams</p>
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

