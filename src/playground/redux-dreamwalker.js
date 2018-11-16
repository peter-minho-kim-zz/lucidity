import { combineReducers, createStore } from 'redux';
import uuid from 'uuid'

// ADD_DREAM
const addDream = ({ title = '', entry = '', hoursSlept = 8, dreamType = '', createdAt = 0 } = {}) => ({
  type: 'ADD_DREAM',
  dream: {
    id: uuid(),
    title,
    entry,
    hoursSlept,
    dreamType,
    createdAt 
  }
})

// REMOVE_DREAM
const removeDream = ({ id }) => ({
  type: 'REMOVE_DREAM',
  id
})

// EDIT_DREAM
const editDream = (id, updates) => ({
  type: 'EDIT_DREAM',
  id,
  updates
})

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

// SET_DREAM_FILTER
const setDreamFilter = (dreamFilter = 'all') => ({
  type: 'SET_DREAM_FILTER',
  dreamFilter
})

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})

// SORT_BY_TYPE
const sortByHoursSlept = () => ({
  type: 'SORT_BY_HOURS_SLEPT'
})

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})

// Dreams Reducer
const dreamsReducerDefaultState = []

const dreamsReducer = (state = dreamsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_DREAM':
      return [
        ...state, 
        action.dream
      ]
    case 'REMOVE_DREAM':
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_DREAM':
      return state.map((dream) => {
        if (dream.id === action.id) {
          return {
            ...dream,
            ...action.updates
          }
        } else {
          return dream
        }
      })
    default: 
      return state
  }
}

// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',  
  dreamFilter: 'all',
  startDate: undefined,
  endDate: undefined
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

// Get visible dreams
const getVisibleDreams = (dreams, { text, sortBy, dreamFilter, startDate, endDate }) => {
  return dreams.filter((dream) => {
    const textMatch = dream.title.toLowerCase().includes(text.toLowerCase())
    const startDateMatch = typeof startDate !== 'number' || dream.createdAt >= startDate
    const endDateMatch = typeof endDate !== 'number' || dream.createdAt <= endDate

    if (dreamFilter === 'normal') {
      return textMatch && startDateMatch && endDateMatch && dream.dreamType === 'normal' 
    } else if (dreamFilter === 'lucid') {
      return textMatch && startDateMatch && endDateMatch && dream.dreamType === 'lucid' 
    } else if (dreamFilter === 'nightmare') {
      return textMatch && startDateMatch && endDateMatch && dream.dreamType === 'nightmare' 
    } else {
      return textMatch && startDateMatch && endDateMatch
    } 
    
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    } else if (sortBy === 'hoursSlept') {
      return a.hoursSlept < b.hoursSlept ? 1 : -1
    }
  })
}

// Create Store
const store = createStore(
  combineReducers({
    dreams: dreamsReducer,
    filters: filtersReducer
  })
)

store.subscribe(() => {
  const state = store.getState()
  const visibleDreams = getVisibleDreams(state.dreams, state.filters)
  console.log(visibleDreams)
}) 

const dreamOne = store.dispatch(addDream({ title: 'flying', entry: 'through space', createdAt: -21000, hoursSlept: 11, dreamType: 'normal'}))
const dreamTwo = store.dispatch(addDream({ title: 'inception', entry: 'movie', createdAt: -1000, hoursSlept: 4, dreamType: 'lucid' }))
const dreamThree = store.dispatch(addDream({ title: 'batman', entry: 'movie', createdAt: -1000, hoursSlept: 4, dreamType: 'lucid' }))
const dreamFour = store.dispatch(addDream({ title: 'pokemon', entry: 'movie', createdAt: -1000, hoursSlept: 4, dreamType: 'nightmare' }))

// store.dispatch(removeDream({ id: dreamOne.dream.id }))
// store.dispatch(editDream(dreamTwo.dream.id, { title: 'flying high'}))

// store.dispatch(setTextFilter('inc'))
// store.dispatch(setTextFilter())

// store.dispatch(sortByHoursSlept())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))

store.dispatch(setDreamFilter('normal'))

// const demoState = {
//   dreams: [{
//     id: '6969',
//     title: 'Flying in Space',
//     entry: 'I was flying so high.',
//     hoursSlept: 7,
//     dreamType: 'Lucid',
//     createdAt: 0
//   }],
//   filters: {
//     text: 'fly',
//     sortBy: 'date', //date or type 
//     dreamFilter: 'all',
//     startDate: undefined,
//     endDate: undefined
//   }
// }