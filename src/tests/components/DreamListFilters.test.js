import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import { DreamListFilters } from '../../components/DreamListFilters'
import { filters, altFilters } from '../fixtures/filters'

let setDreamFilter, setTextFilter, sortByDate, sortByHoursSlept, setStartDate, setEndDate, wrapper

beforeEach(() => {
  setDreamFilter = jest.fn()
  setTextFilter = jest.fn()
  sortByDate = jest.fn()
  sortByHoursSlept = jest.fn()
  setStartDate = jest.fn()
  setEndDate = jest.fn()
  wrapper = shallow(
    <DreamListFilters 
      filters={filters}
      setDreamFilter={setDreamFilter}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByHoursSlept={sortByHoursSlept}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  )
})

test('should render DreamListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render DreamListFilters with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
  const value = 'rocket'
  wrapper.find('input').simulate('change', {
    target: { value }
  })
  expect(setTextFilter).toHaveBeenCalledWith(value)
})

test('should sort by date', () => {
  const value = 'date'
  wrapper.setProps({
    filters: altFilters
  })
  wrapper.find('select').at(0).simulate('change', {
    target: { value }
  })
  expect(sortByDate).toHaveBeenCalled()
})

test('should sort by hours slept', () => {
  const value = 'hoursSlept'
  wrapper.find('select').at(0).simulate('change', {
    target: { value }
  })
  expect(sortByHoursSlept).toHaveBeenCalled()
})

test('should handle date changes', () => {
  const startDate = moment(0).add(4, 'years')
  const endDate = moment(0).add(8, 'years')
  wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate })
  expect(setStartDate).toHaveBeenLastCalledWith(startDate)
  expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('should handle date focus changes', () => {
  const calendarFocused = 'endDate'
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})