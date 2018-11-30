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
      <div className="buffer-wrapper">
        <div className="wrapper">
          <DreamForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({ 
  addDream: (dream) => dispatch(addDream(dream)) 
})

export default connect(undefined, mapDispatchToProps)(AddDreamPage)