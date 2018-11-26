import React from 'react'
import { connect } from 'react-redux'
import { removeDream } from '../actions/dreams'
import { Link } from 'react-router-dom'
import moment from 'moment'

class DreamListItem extends React.Component {
  constructor(props) {
    super(props)
  }
  onRemove = () => {
    this.refs.dream.classList.add('disappear')
    setTimeout(() => {
      this.props.removeDream(this.props)
    }, 400)
  }
  openDream = () => {
    const dreamBody = this.refs.dreamBody
    dreamBody.style.maxHeight ? 
      dreamBody.style.maxHeight = null : dreamBody.style.maxHeight = dreamBody.scrollHeight + 'px'
  }
  setEditText = () => {
    this.refs.option.textContent = 'Edit Dream'
    this.refs.option.classList.add('appear')
  }
  setDeleteText = () => {
    this.refs.option.textContent = 'Delete Dream'
    this.refs.option.classList.add('appear')
  }
  removeOptionText = () => {
    this.refs.option.classList.remove('appear')
  }
  render() {
    return (
      <div className="dream" onClick={this.openDream} ref="dream">
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
            <span className="dream__options-text" ref="option"></span>
            <Link to={`/edit/${this.props.id}`} className="dream__link">
              <i 
                className="fas fa-pencil-alt dream__edit" 
                onMouseEnter={this.setEditText} 
                onMouseLeave={this.removeOptionText}>
              </i>
            </Link>
            <i 
              className="fas fa-times-circle dream__delete" 
              onMouseEnter={this.setDeleteText}
              onMouseLeave={this.removeOptionText}
              onClick={this.onRemove}>
            </i>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  removeDream: (dream) => dispatch(removeDream(dream))
})

const mapStateToProps = (state, props) => ({

})


// export default DreamListItem
export default connect(mapStateToProps, mapDispatchToProps)(DreamListItem)