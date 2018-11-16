import moment from 'moment'
import getVisibleDreams from '../../selectors/dreams'
import dreams from '../fixtures/dreams'

test('should filter by text value', () => {
  const filters = {
    text: 'o',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
    dreamFilter: 'all'
  }
  const result = getVisibleDreams(dreams, filters)
  expect(result).toEqual([dreams[0], dreams[1]])
})

test('should filter by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined,
    dreamFilter: 'all'
  }
  const result = getVisibleDreams(dreams, filters)
  expect(result).toEqual([dreams[2], dreams[0]])
})

test('should filter by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days'),
    dreamFilter: 'all'
  }
  const result = getVisibleDreams(dreams, filters)
  expect(result).toEqual([dreams[0], dreams[1]])
})

test('should filter by dream type', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
    dreamFilter: 'lucid'
  }
  const result = getVisibleDreams(dreams, filters)
  expect(result).toEqual([dreams[1]])
})

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
    dreamFilter: 'all'
  }
  const result = getVisibleDreams(dreams, filters)
  expect(result).toEqual([dreams[2], dreams[0], dreams[1]])
})

test('should sort by end hours slept', () => {
  const filters = {
    text: '',
    sortBy: 'hoursSlept',
    startDate: undefined,
    endDate: undefined,
    dreamFilter: 'all'
  }
  const result = getVisibleDreams(dreams, filters)
  expect(result).toEqual([dreams[2], dreams[1], dreams[0]])
})