import React from 'react'
import { connect } from 'react-redux'
import { Line, Doughnut } from 'react-chartjs-2'
import moment from 'moment'

class Charts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // Chart configurations
      sleepTimeChartData: {
        labels: this.props.dreams.map((dream) => moment(dream.createdAt).format('MMM D')).reverse(),
        datasets: [
          {
            label: 'Hours Slept',
            fill: false,
            lineTension: 0.3,
            backgroundColor: '#53D1FE',
            borderColor: '#53D1FE',
            borderCapStyles: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#53D1FE',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#53D1FE',
            pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.props.dreams.map((dream) => dream.hoursSlept).reverse()
          }
        ]
      },
      sleepTimeChartOptions: {
        animation: {
          duration: 2600,
          easing: 'easeOutCubic'
        },
        legend: {
          labels: {
            fontColor: 'white',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 14,
            padding: 25
          }
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor: '#fff'
            },
            gridLines: {
              color: '#7C7C7C'
            }
          }],
          xAxes: [{
            ticks: {
              fontColor: '#fff'
            },
            gridLines: {
              display: false
            }
          }]
        }
      },
      dreamTypeChartData: {
        labels: ['Normal', 'Lucid', 'Nightmare'],
        datasets: [
          {
            label: 'Dream Types',
            backgroundColor: ['#53D1FE', '#191992', '#4332B8'],
            borderWidth: [2, 2, 2],
            data: []
          }
        ]
      },
      dreamTypeChartOptions: {
        animation: {
          duration: 2600,
          easing: 'easeOutCubic'
        },
        cutoutPercentage: 80,
        legend: {
          labels: {
            fontColor: 'white',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 14,
            padding: 25
          },
          position: 'right'
        },
        rotation: Math.PI * Math.random()
      },
      dreamTypeChartTotals: {
        normal: this.props.dreams.filter((dream) => {
          return dream.dreamType === 'normal'
        }),
        lucid: this.props.dreams.filter((dream) => {
          return dream.dreamType === 'lucid'
        }),
        nightmare: this.props.dreams.filter((dream) => {
          return dream.dreamType === 'nightmare'
        })
      }
    }
  }
  componentWillMount() {
    // Pull chart data
    const dreamData = this.state.dreamTypeChartData.datasets[0].data
    const dreamTypes = this.state.dreamTypeChartTotals
    dreamData.push(dreamTypes.normal.length, dreamTypes.lucid.length, dreamTypes.nightmare.length)
  }
  render() {
    return (
      <div className="charts-container u-margin-bottom-big fade-in-bottom">
        <div className="chart chart--line-container">
          <Line
            data={this.state.sleepTimeChartData}
            options={this.state.sleepTimeChartOptions}
          />
        </div>
        <div className="chart chart--doughnut-container fade-in-bottom">
          <Doughnut
            data={this.state.dreamTypeChartData}
            options={this.state.dreamTypeChartOptions}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  dreams: state.dreams
})

export default connect(mapStateToProps)(Charts)