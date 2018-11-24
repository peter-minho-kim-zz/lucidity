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
    lucidDreamCount >= 3 ? this.state.rank = 'Dreamwalker' : this.state.rank = 'Stargazer'
    
    // Calculate lucid dream percentage
    this.state.lucidDreamPct = ((lucidDreamCount / dreams.length) * 100).toFixed(2).toString() + '%' 
  }
  render() {
    return (
      <div className="stat-cards-wrapper">
        <div className="stat-cards-wrapper__vertical u-margin-bottom-medium">
          <div className="stat-card stat-card--vertical">
            <img src="./images/lucid-pct.png" alt="lucid dream percentage" className="stat-card__img"/>
            <div className="stat-card--vertical__text-box">
              <p className="stat-card__stat">{this.state.lucidDreamPct}</p>
              <p className="stat-card__title">lucid dream percentage</p>
            </div>
          </div>
          <div className="stat-card stat-card--vertical">
            <img src="./images/current-rank.png" alt="current rank" className="stat-card__img" />
            <div className="stat-card--vertical__text-box">
              <p className="stat-card__stat">{this.state.rank}</p>    
              <p className="stat-card__title">current rank</p>   
            </div>
          </div>
          <div className="stat-card stat-card--vertical">
            <img src="./images/total-entries.png" alt="total entries" className="stat-card__img" />
            <div className="stat-card--vertical__text-box">
              <p className="stat-card__stat">{this.state.totalEntries}</p>
              <p className="stat-card__title">total entries</p>
            </div>
          </div>
        </div>
        <div className="stat-cards-wrapper__horizontal u-margin-bottom-medium">
          <div className="stat-card stat-card--horizontal">          
            <div className="stat-card--horizontal__text-box">
              <p className="stat-card__stat">{this.state.avgSleepTime} hours</p>
              <p className="stat-card__title">average sleep time</p>
            </div>
            <div className="stat-card__img-container">
              <img src="./images/avg-sleep.png" alt="average sleep" className="stat-card__img stat-card__img--horizontal" />
            </div>
          </div>
          <div className="stat-card stat-card--horizontal">
            <div className="stat-card--horizontal__text-box">
              <p className="stat-card__stat">{this.state.avgLucidityLevel}</p>
              <p className="stat-card__title">average lucidity</p>
            </div>
            <div className="stat-card__img-container">
              <img src="./images/avg-lucidity.png" alt="average lucidity" className="stat-card__img stat-card__img--horizontal" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  dreams: state.dreams
})

export default connect(mapStateToProps)(Stats)