import moment from 'moment'
import dreams from '../fixtures/dreams'
import filtersReducer from '../../reducers/filters'

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT'})
  expect(state).toEqual({
    text: '',
    dreamFilter: 'all',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_HOURS_SLEPT'})
  expect(state.sortBy).toBe('hoursSlept')
})

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    dreamFilter: 'all',
    sortBy: 'hoursSlept',
    startDate: undefined,
    endDate: undefined
  }
  const action = {type: 'SORT_BY_DATE'}
  const state = filtersReducer(currentState, action)

  expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
  const action = {
    type: 'SET_TEXT_FILTER',
    text: 'a text'
  }
  const state = filtersReducer(undefined, action)
  expect(state.text).toBe('a text')
})

test('should set dream filter', () => {
  const action = {
    type: 'SET_DREAM_FILTER',
    dreamFilter: 'lucid'
  }
  const state = filtersReducer(undefined, action)
  expect(state.dreamFilter).toBe('lucid')
})

test('should set start date filter', () => {
  const action = {
    type: 'SET_START_DATE',
    startDate: moment(0)
  }
  const state = filtersReducer(undefined, action)
  expect(state.startDate).toEqual(moment(0))
})

test('should set end date filter', () => {
  const action = {
    type: 'SET_END_DATE',
    endDate: moment(0)
  }
  const state = filtersReducer(undefined, action)
  expect(state.endDate).toEqual(moment(0))
})