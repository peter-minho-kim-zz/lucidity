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
      <div className="dream" onClick={this.openDream}>
        <div className="dream__header">
          <div className="dream__title-box">
            <span className="dream__title">{this.props.title}</span>
          </div>
          <div className="dream__info-container">
            <div className="dream__info-box">
              <span className="dream__type">
                {(() => {
                  const dreamTypeSplit = this.props.dreamType.split('')
                  const dreamTypeEdit = dreamTypeSplit.map((letter, index) => {
                    if (index === 0) {
                      return letter.toUpperCase()
                    } else {
                      return letter
                    }
                  })
                  return dreamTypeEdit.join('')
                })()}
              </span>
            </div>
            <div className="dream__info-box">
              <span className="dream__lucidityLevel"><i className="fas fa-signal dream__level"></i>{this.props.lucidityLevel}</span>
            </div>
            <div className="dream__info-box">
              <span className="dream__hours"><i className="far fa-clock dream__clock"></i>{this.props.hoursSlept}</span>
            </div>
            <div className="dream__info-box">
              <span className="dream__date"><i className="far fa-calendar-alt dream__calendar"></i>{moment(this.props.createdAt).format('MMM Do, YYYY')}</span>
            </div>
          </div>
        </div>
        <div className="dream__body" ref="dreamBody">
          <p className="dream__entry"><i className="fas fa-quote-left dream__quote"></i>{this.props.entry}</p>
          <div className="dream__options">
            <Link to={`/edit/${this.props.id}`} className="dream__link">
              <i className="fas fa-pencil-alt dream__edit"></i>
              <i className="fas fa-times-circle dream__delete"></i>
            </Link>
          </div>
        </div>
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