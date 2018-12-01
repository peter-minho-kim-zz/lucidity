import React from 'react'
import Charts from './Charts'
import Stats from './Stats'

class DashboardPage extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.refs.wrapper.style.minHeight = window.innerHeight + 'px'
  }
  render() {
    return (
      <div className="wrapper" ref="wrapper">
        <Stats />
        <Charts />
      </div>
    )
  }
}

export default DashboardPage