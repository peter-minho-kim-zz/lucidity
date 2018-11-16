import React from 'react'
import { connect } from 'react-redux'
import DreamForm from './DreamForm'
import { addDream } from '../actions/dreams'

export class AddDreamPage extends React.Component {
  onSubmit = (dream) => {
    this.props.addDream(dream)
    this.props.history.push('/dreams')
  }
  render() {
    return (
      <div>
        <h1>Add Dream</h1>
        <DreamForm
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({ 
  addDream: (dream) => dispatch(addDream(dream)) 
})

export default connect(undefined, mapDispatchToProps)(AddDreamPage)