import React from 'react'
import { connect } from 'react-redux'
import DreamForm from './DreamForm'
import { addDream } from '../actions/dreams'

export class AddDreamPage extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.refs.wrapper.style.minHeight = window.innerHeight + 'px'
  }
  onSubmit = (dream) => {
    this.props.addDream(dream)
    this.props.history.push('/dreams')
  }
  render() {
    return (
      <div className="wrapper" ref="wrapper">
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