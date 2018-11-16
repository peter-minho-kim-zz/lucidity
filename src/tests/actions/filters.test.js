import moment from 'moment'
import { 
  setStartDate, 
  setEndDate, 
  setTextFilter, 
  setDreamFilter, 
  sortByDate, 
  sortByHoursSlept 
} from '../../actions/filters'

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})

test('should generate set text filter with text value', () => {
  const action = setTextFilter('space')
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'space'
  })
})

test('should generate set text filter action object with default values', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})

test('should generate set dream filter action object', () => {
  const action = setDreamFilter('lucid')
  expect(action).toEqual({
    type: 'SET_DREAM_FILTER',
    dreamFilter: 'lucid'
  })
})

test('should generate set dream filter action object with default values', () => {
  const action = setDreamFilter()
  expect(action).toEqual({
    type: 'SET_DREAM_FILTER',
    dreamFilter: 'all'
  })
})

test('should generate sort by date action object', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' })
})

test('should generate sort by hours slept action object', () => {
  expect(sortByHoursSlept()).toEqual({ type: 'SORT_BY_HOURS_SLEPT' })
})