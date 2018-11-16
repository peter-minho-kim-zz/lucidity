import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

class DreamForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: props.dream ? props.dream.title : '',
      entry: props.dream ? props.dream.entry : '',
      hoursSlept: props.dream ? props.dream.hoursSlept.toString() : '',
      dreamType: props.dream ? props.dream.dreamType : 'normal',
      createdAt: props.dream ? moment(props.dream.createdAt) : moment(),
      calendarFocused: false,
      error: '',
      buttonText: ''
    }
  }
  onTitleChange = (e) => {
    const title = e.target.value
    this.setState(() => ({ title }))
  }
  onEntryChange = (e) => {
    const entry = e.target.value
    this.setState(() => ({ entry }))
  }
  onHoursSleptChange = (e) => {
    const hoursSlept = e.target.value
    if (!hoursSlept || hoursSlept.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ hoursSlept }))
    }
  }
  onDreamTypeChange = (e) => {
    const dreamType = e.target.value
    this.setState(() => ({ dreamType }))
  }
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }
  onSubmit = (e) => {
    e.preventDefault()

    if (!this.state.title || !this.state.entry || !this.state.hoursSlept) {
      this.setState(() => ({ error: 'Please fill in all fields' }))
    } else {
      this.setState(() => ({ error: ''}))
      
      this.props.onSubmit({
        title: this.state.title,
        entry: this.state.entry,
        hoursSlept: parseFloat(this.state.hoursSlept, 10),
        createdAt: this.state.createdAt.valueOf(),
        dreamType: this.state.dreamType
      })
    }
  }
  componentWillMount() {
    !!this.state.title === false ? this.state.buttonText = 'Add Dream' : this.state.buttonText = 'Edit Dream' 
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input 
            type="text" 
            placeholder="Title" 
            autoFocus 
            value={this.state.title}
            onChange={this.onTitleChange}
            />
          <input 
            type="text" 
            placeholder="Hours Slept"
            value={this.state.hoursSlept}
            onChange={this.onHoursSleptChange}
          />
          <select 
            value={this.state.dreamType}
            onChange={this.onDreamTypeChange}>
            <option value="normal">Normal</option>
            <option value="lucid">Lucid</option>
            <option value="nightmare">Nightmare</option>
          </select>
          <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea 
            placeholder="What did you dream about?" 
            value={this.state.entry}
            onChange={this.onEntryChange}>
          </textarea>
          <button>
            {this.state.buttonText}
          </button>
        </form>
      </div>
    )
  }
}

export default DreamForm