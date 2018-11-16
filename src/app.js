import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addDream } from './actions/dreams'
import { setDreamFilter, setTextFilter } from './actions/filters'
import getVisibleDreams from './selectors/dreams'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

store.dispatch(addDream({ title: 'Iron Man', entry: 'this is the dream entry', dreamType: 'lucid', hoursSlept: 6.25, createdAt: 1000 }))
store.dispatch(addDream({ title: 'Thor', entry: 'this is the dream entry', dreamType: 'normal', hoursSlept: 9.5, createdAt: 400 }))
store.dispatch(addDream({ title: 'Thanos', entry: 'this is the dream entry', dreamType: 'nightmare', hoursSlept: 8.75, createdAt: 2000 }))
store.dispatch(addDream({ title: 'Captain America', entry: 'this is the dream entry', dreamType: 'lucid', hoursSlept: 7, createdAt: -60 }))

const state = store.getState()
const visibleDreams = getVisibleDreams(state.dreams, state.filters)

console.log(visibleDreams)

console.log(store.getState())

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app')) 