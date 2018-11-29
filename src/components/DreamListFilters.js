import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setDreamFilter, setTextFilter, sortByDate, sortByHoursSlept, setStartDate, setEndDate } from '../actions/filters'

export class DreamListFilters extends React.Component {
  state = {
    calendarFocused: null
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
  }
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  }
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value)
  }
  onSortChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate()
    } else if (e.target.value === 'hoursSlept') {
      this.props.sortByHoursSlept()
    }
  }
  render() {
    return (
      <div className="dream-list-filters u-margin-bottom-medium fade-in-bottom">
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
          className="text-filter"
          placeholder="Search dreams"
        />
        <select
          value={this.props.filters.sortBy}
          onChange={this.onSortChange}
          className="select"
        >
          <option value="date">Sort by Date</option>
          <option value="hoursSlept">Sort by Hours</option>
        </select>
        <select
          value={this.props.filters.dreamFilter}
          onChange={(e) => {
            if (e.target.value === 'all') {
              this.props.setDreamFilter('all')
            } else if (e.target.value === 'normal') {
              this.props.setDreamFilter('normal')
            } else if (e.target.value === 'lucid') {
              this.props.setDreamFilter('lucid')
            } else if (e.target.value === 'nightmare') {
              this.props.setDreamFilter('nightmare')
            }
          }}
          className="select"
        >
          <option value="all">All Dreams</option>
          <option value="normal">Normal</option>
          <option value="lucid">Lucid</option>
          <option value="nightmare">Nightmare</option>
        </select>
        <DateRangePicker 
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  setDreamFilter: (dreamType) => dispatch(setDreamFilter(dreamType)),
  sortByDate: () => dispatch(sortByDate()),
  sortByHoursSlept: () => dispatch(sortByHoursSlept()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(DreamListFilters)