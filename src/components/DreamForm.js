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
      lucidityLevel: props.dream ? props.dream.lucidityLevel : 0,
      calendarFocused: false,
      error: '',
      buttonText: '',
      imgUrl: props.dream ? `../images/lucidity-level-${props.dream.lucidityLevel}.png` : '../images/lucidity-level-0.png'
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
  onSliderChange = (e) => {
    const lucidityLevel = e.target.value
    this.setState(() => ({ lucidityLevel }))

    lucidityLevel === '0' ? this.setState(() => {
      return {
        imgUrl: '../images/lucidity-level-0.png'
      }
    }) :
    lucidityLevel === '1' ? this.setState(() => {
      return {
        imgUrl: '../images/lucidity-level-1.png'
      }
    }) :
    lucidityLevel === '2' ? this.setState(() => {
      return {
        imgUrl: '../images/lucidity-level-2.png'
      }
    }) :
    lucidityLevel === '3' ? this.setState(() => {
      return {
        imgUrl: '../images/lucidity-level-3.png'
      }
    }) :
    lucidityLevel === '4' ? this.setState(() => {
      return {
        imgUrl: '../images/lucidity-level-4.png'
      }
    }) :
    this.setState(() => {
      return {
        imgUrl: '../images/lucidity-level-5.png'
      }
    }) 
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
        dreamType: this.state.dreamType,
        lucidityLevel: parseFloat(this.state.lucidityLevel, 10)
      })
    }
  }
  componentWillMount() {
    !!this.state.title === false ? this.state.buttonText = 'Add Dream' : this.state.buttonText = 'Edit Dream' 
  }
  render() {
    return (
      <div className="form-container">
        <h2 className="form-header u-margin-bottom-small">Add New Dream</h2>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit} className="form">
          <input 
            type="text" 
            placeholder="Title" 
            autoFocus 
            value={this.state.title}
            onChange={this.onTitleChange}
            className="form__title-input"
          />
          <textarea
            className="form__entry-text-area"
            placeholder="What did you dream about?"
            value={this.state.entry}
            onChange={this.onEntryChange}
          >
          </textarea>
          <input 
            type="text" 
            placeholder="Hours Slept"
            value={this.state.hoursSlept}
            onChange={this.onHoursSleptChange}
            className="form__hours-slept-input"
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <select 
            className="form__dream-type-select"
            value={this.state.dreamType}
            onChange={this.onDreamTypeChange}>
            <option value="normal">Normal</option>
            <option value="lucid">Lucid</option>
            <option value="nightmare">Nightmare</option>
          </select>
          <div className="form__slider-output">
            <div className="form__slider-output__img-container">
              <img src={this.state.imgUrl} alt="lucidity level icon" className="form__slider-output__img"/>
            </div>
            <div className="form__slider-output__value-container">
              <span className="form__slider-output__value">{this.state.lucidityLevel}</span>
              <p className="form__slider-output__value-label">Lucidity Level</p>
            </div>
          </div>
          <div className="form__lucidity-level-slider__container">
            <input 
              className="form__lucidity-level-slider"
              onChange={this.onSliderChange} 
              type="range" 
              min="0" 
              max="5" 
              value={this.state.lucidityLevel} 
            />
            <span className="form__lucidity-level-slider__description">(Dream Vividness)</span>
          </div>
          <button className="form__button btn btn--blue">
            {this.state.buttonText}
          </button>
        </form>
      </div>
    )
  }
}

export default DreamForm