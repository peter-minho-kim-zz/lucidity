import React from 'react'
import DreamList from './DreamList'
import DreamListFilters from './DreamListFilters'
import DreamViewSummary from './DreamViewSummary'

class DreamsPage extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // This fixes the bottom spacing issue that the moving stars background causes
    this.refs.wrapper.style.minHeight = window.innerHeight + 'px'
  }
  render() {
    return (
      <div className="wrapper" ref="wrapper">
        <DreamViewSummary />
        <DreamListFilters />
        <DreamList />
      </div>
    )
  }
}

export default DreamsPage