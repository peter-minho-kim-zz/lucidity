import React from 'react'
import { connect } from 'react-redux'
import DreamForm from './DreamForm'
import { editDream, removeDream } from '../actions/dreams'

export class EditDreamPage extends React.Component {
  onSubmit = (dream) => {
    this.props.editDream(this.props.dream.id, dream)
    this.props.history.push('/dreams')
  }
  onRemove = () => {
    this.props.removeDream(this.props.dream)
    this.props.history.push('/dreams')
  }
  render() {
    return (
      <div>
        <DreamForm
          dream={this.props.dream}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    )
  }
}


const mapStateToProps = (state, props) => ({
  dream: state.dreams.find((dream) => dream.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch, props) => ({
  editDream: (id, dream) => dispatch(editDream(id, dream)),
  removeDream: (dream) => dispatch(removeDream(dream))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditDreamPage)