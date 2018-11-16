import { createStore, combineReducers } from 'redux'
import dreamsReducer from '../reducers/dreams'
import filtersReducer from '../reducers/filters'

export default () => {
  const store = createStore(
    combineReducers({
      dreams: dreamsReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  return store
}
