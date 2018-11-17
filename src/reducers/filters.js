import moment from 'moment'

// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  dreamFilter: 'all',
  startDate: undefined,
  endDate: undefined
  // startDate: moment().startOf('month'),
  // endDate: moment().endOf('month')
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SET_DREAM_FILTER':
      return {
        ...state,
        dreamFilter: action.dreamFilter
      }
    case 'SORT_BY_HOURS_SLEPT':
      return {
        ...state,
        sortBy: 'hoursSlept'
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state
  }
}

export default filtersReducer