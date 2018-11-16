import React from 'react'
import moment from 'moment'
import { shallow } from 'enzyme'
import DreamForm from '../../components/DreamForm'
import dreams from '../fixtures/dreams'

test('should render DreamForm correctly', () => {
  const wrapper = shallow(<DreamForm />)
  expect(wrapper).toMatchSnapshot()
})

test('should render DreamForm correctly with dream data', () => {
  const wrapper = shallow(<DreamForm dream={dreams[0]} />)
  expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<DreamForm />)
  expect(wrapper).toMatchSnapshot()
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('error').length).toBeGreaterThan(0)
  expect(wrapper).toMatchSnapshot()
})

test('should set title on input change', () => {
  const value = 'New title'
  const wrapper = shallow(<DreamForm />)
  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('title')).toBe(value)
})

test('should set entry on textarea change', () => {
  const value = 'New entry'
  const wrapper = shallow(<DreamForm />)
  wrapper.find('textarea').simulate('change', {
    target: { value }
  })
  expect(wrapper.state('entry')).toBe(value)
})

test('should set hours slept if valid input', () => {
  const value = '7'
  const wrapper = shallow(<DreamForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('hoursSlept')).toBe(value)
})

test('should not set hours slept if valid input', () => {
  const value = '7.999'
  const wrapper = shallow(<DreamForm />)
  wrapper.find('input').at(1).simulate('change', {
    target: { value }
  })
  expect(wrapper.state('hoursSlept')).toBe('')
})

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn()
  const wrapper = shallow(<DreamForm dream={dreams[0]} onSubmit={onSubmitSpy} />)
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  })
  expect(wrapper.state('error')).toBe('')
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    title: dreams[0].title,
    entry: dreams[0].entry,
    dreamType: dreams[0].dreamType,
    hoursSlept: dreams[0].hoursSlept,
    createdAt: dreams[0].createdAt
  })
})

test('should set new date on date change', () => {
  const now = moment()
  const wrapper = shallow(<DreamForm />)
  wrapper.find('SingleDatePicker').prop('onDateChange')(now)
  expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calendar focus on change', () => {
  const focused = true
  const wrapper = shallow(<DreamForm />)
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused })
  expect(wrapper.state('calendarFocused')).toBe(focused)
})