import React from 'react'
import { removeDream } from '../actions/dreams'
import { Link } from 'react-router-dom'
import moment from 'moment'

class DreamListItem extends React.Component {
  constructor(props) {
    super(props)
    this.openDream = this.openDream.bind(this)
  }
  openDream() {
    const dreamBody = this.refs.dreamBody
    dreamBody.style.maxHeight ? 
      dreamBody.style.maxHeight = null : dreamBody.style.maxHeight = dreamBody.scrollHeight + 'px'
  }
  render() {
    return (
      <div className="dream">
        <div className="dream__header" onClick={this.openDream}>
          <span className="dream__title">{this.props.title}</span>
          <span className="dream__type">{this.props.dreamType}</span>
          <span className="dream__hours">{this.props.hoursSlept}</span>
          <span className="dream__date">{moment(this.props.createdAt).format('MMM Do, YYYY')}</span>
        </div>
        <div className="dream__body" ref="dreamBody">
          <p className="dream__entry"><i class="fas fa-quote-left dream__quote"></i>{this.props.entry}</p>
        </div>

            {/*<Link to={`/edit/${id}`} className="dream__link">
              </Link>*/}
      </div>
    )
  }
}

// const DreamListItem = ({ id, title, entry, dreamType, createdAt, hoursSlept }) => (
//   <div className="dream">
//     <div className="dream__header">
//       <span className="dream__title">{title}</span>
//       <span className="dream__type">{dreamType}</span>
//       <span className="dream__hours">{hoursSlept}</span>
//       <span className="dream__date">{moment(createdAt).format('MMM Do, YYYY')}</span>
//     </div>
//     <div className="dream__body">
//       <p className="dream__entry">{entry}</p>
//     </div>

//     {/*<Link to={`/edit/${id}`} className="dream__link">
// </Link>*/}
//   </div>
// )

export default DreamListItem