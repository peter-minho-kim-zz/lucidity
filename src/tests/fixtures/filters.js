import moment from 'moment'

const filters = {
  text: '',
  sortBy: 'date',
  dreamFilter: 'all',
  startDate: undefined,
  endDate: undefined
}

const altFilters = {
  text: '',
  sortBy: 'hoursSlept',
  dreamFilter: 'all',
  startDate: moment(0),
  endDate: moment(0).add(3, 'days')
}

export { filters, altFilters }