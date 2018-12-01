import React from 'react'
import { connect } from 'react-redux'
import DreamForm from './DreamForm'
import { editDream, removeDream } from '../actions/dreams'

class EditDreamPage extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.refs.wrapper.style.minHeight = window.innerHeight + 'px'
  }
  onSubmit = (dream) => {
    this.props.editDream(this.props.dream.id, dream)
    this.props.history.push('/dreams')
  }
  render() {
    return (
      <div className="wrapper" ref="wrapper">
        <DreamForm
          dream={this.props.dream}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}


const mapStateToProps = (state, props) => ({
  dream: state.dreams.find((dream) => dream.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch, props) => ({
  editDream: (id, dream) => dispatch(editDream(id, dream))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditDreamPage)