import React from 'react'
import { connect } from 'react-redux'
import { Bar, Line, Doughnut} from 'react-chartjs-2'

class Charts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData: {
        labels: ['Monday', 'Tuesday', 'Wednesday'],
        datasets: [
          {
            label: 'Days',
            data: [1, 2, 3],
            backgroundColor: ['rgb(0, 121, 211)']
          }
        ]
      }
    }
  }
  render() {
    console.log(this.props.dreams)
    return (
      <div>
        CHART COMPONENT
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: 'TITLE TEXT'
            },
            legend: {
              display: true
            }
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  dreams: state.dreams
})

export default connect(mapStateToProps)(Charts)