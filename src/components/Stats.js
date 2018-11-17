import React from 'react'
import { connect } from 'react-redux'

class Stats extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rank: '',
      lucidDreamPct: '',
      totalEntries: this.props.dreams.length,
      avgSleepTime: 0,
      avgLucidityLevel: 0
    }
  }
  componentWillMount() {
    const dreams = this.props.dreams
    let lucidDreamCount = 0
    let totalSleepTime = 0
    let totalLucidityLevel = 0

    dreams.forEach((dream) => {
      if (dream.dreamType === 'lucid') {
        lucidDreamCount += 1
      }

      // Calculate average sleep time
      totalSleepTime += dream.hoursSlept
      this.state.avgSleepTime = (totalSleepTime / dreams.length).toFixed(1)

      // Calculate average lucidity level
      totalLucidityLevel += dream.lucidityLevel
      this.state.avgLucidityLevel = (totalLucidityLevel / dreams.length).toFixed(1)
    })
    
    // Calculate rank
    lucidDreamCount >= 5 ? this.state.rank = 'Dreamwalker' : this.state.rank = 'Stargazer'
    
    // Calculate lucid dream percentage
    this.state.lucidDreamPct = (lucidDreamCount / dreams.length).toFixed(2).toString() + '%' 
  }
  render() {
    return (
      <div>
        <p>RANK: {this.state.rank}</p>
        <p>LUCID DREAM PERCENTAGE: {this.state.lucidDreamPct}</p>
        <p>TOTAL ENTRIES: {this.state.totalEntries}</p>
        <p>AVERAGE SLEEP HOURS: {this.state.avgSleepTime}</p>
        <p>AVERAGE LUCIDITY LEVEL: {this.state.avgLucidityLevel}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  dreams: state.dreams
})

export default connect(mapStateToProps)(Stats)