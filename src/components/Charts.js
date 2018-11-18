import React from 'react'
import { connect } from 'react-redux'
import { Line, Doughnut } from 'react-chartjs-2'
import moment from 'moment'

class Charts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sleepTimeChartData: {
        labels: this.props.dreams.map((dream) => moment(dream.createdAt).format('MMM Do')).reverse(),
        datasets: [
          {
            label: 'Hours Slept',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75, 192, 192, 0.4)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderCapStyles: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75, 192, 192, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.props.dreams.map((dream) => dream.hoursSlept).reverse()
          }
        ]
      },
      sleepTimeChartOptions: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              color: 'red'
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        }
      }
      // dreamTypeChartData: {
      //   labels: this.props.dreams.map((dream) => moment(dream.createdAt).format('MMM Do')).reverse(),
      //   datasets: [
      //     {
      //       label: 'Hours Slept',
      //       fill: false,
      //       lineTension: 0.1,
      //       backgroundColor: 'rgba(75, 192, 192, 0.4)',
      //       borderColor: 'rgba(75, 192, 192, 1)',
      //       borderCapStyles: 'butt',
      //       borderDash: [],
      //       borderDashOffset: 0.0,
      //       borderJoinStyle: 'miter',
      //       pointBorderColor: 'rgba(75, 192, 192, 1)',
      //       pointBackgroundColor: '#fff',
      //       pointBorderWidth: 1,
      //       pointHoverRadius: 5,
      //       pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
      //       pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
      //       pointHoverBorderWidth: 2,
      //       pointRadius: 1,
      //       pointHitRadius: 10,
      //       data: this.props.dreams.map((dream) => dream.hoursSlept).reverse()
      //     }
      //   ]
      // },
      // dreamTypeChartOptions: {
      //   scales: {
      //     yAxes: [{
      //       ticks: {
      //         beginAtZero: true
      //       },
      //       gridLines: {
      //         color: 'red'
      //       }
      //     }],
      //     xAxes: [{
      //       gridLines: {
      //         display: false
      //       }
      //     }]
      //   }
      // }
    }
  }
  render() {
    console.log(this.props.dreams)
    return (
      <div>
        <Line
          data={this.state.sleepTimeChartData}
          options={this.state.sleepTimeChartOptions}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  dreams: state.dreams
})

export default connect(mapStateToProps)(Charts)