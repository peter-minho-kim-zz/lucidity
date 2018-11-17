import React from 'react'
import { connect } from 'react-redux'

class Stats extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rank: ''
    }
  }
  componentWillMount() {
    let lucidDreamCount = 0

    this.props.dreams.forEach((dream) => {
      if (dream.dreamType === 'lucid') {
        lucidDreamCount += 1
      }
    })

    lucidDreamCount >= 5 ? this.state.rank = 'Dreamwalker' : this.state.rank = 'Stargazer'
  }
  render() {
    return (
      <div>
        MY RANK: {this.state.rank}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  dreams: state.dreams
})

export default connect(mapStateToProps)(Stats)