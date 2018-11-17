import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addDream } from './actions/dreams'
import { setDreamFilter, setTextFilter } from './actions/filters'
import getVisibleDreams from './selectors/dreams'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase'

const store = configureStore()


const now = moment.now()
store.dispatch(addDream({
  title: 'test title',
  entry: 'test entry',
  hoursSlept: 4,
  dreamType: 'normal',
  createdAt: moment(now)
}))

store.dispatch(addDream({
  title: 'test title',
  entry: 'test entry',
  hoursSlept: 5,
  dreamType: 'lucid',
  createdAt: moment(now).subtract(5, 'days')
}))

store.dispatch(addDream({
  title: 'test title',
  entry: 'test entry',
  hoursSlept: 6,
  dreamType: 'nightmare',
  createdAt: moment(now).subtract(10, 'days')
}))

store.dispatch(addDream({
  title: 'test title',
  entry: 'test entry',
  hoursSlept: 7,
  dreamType: 'normal',
  createdAt: moment(now).subtract(15, 'days')
}))

store.dispatch(addDream({
  title: 'test title',
  entry: 'test entry',
  hoursSlept: 8,
  dreamType: 'lucid',
  createdAt: moment(now).subtract(20, 'days')
}))

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app')) 