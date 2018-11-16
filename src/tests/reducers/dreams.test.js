import dreamsReducer from '../../reducers/dreams'
import dreams from '../fixtures/dreams'

test('should set default state', () => {
  const state = dreamsReducer(undefined, { type: '@@INIT'})
  expect(state).toEqual([])
})

test('should remove dream by id', () => {
  const action = {
    type: 'REMOVE_DREAM',
    id: dreams[1].id
  }

  const state = dreamsReducer(dreams, action)
  expect(state).toEqual([dreams[0], dreams[2]])
})

test('should not remove dream if id not found', () => {
  const action = {
    type: 'REMOVE_DREAM',
    id: '99'
  }

  const state = dreamsReducer(dreams, action)
  expect(state).toEqual(dreams)
})

test('should add a dream', () => {
  const action = {
    type: 'ADD_DREAM',
    dream: {
      title: 'dream title',
      entry: 'dream entry',
      dreamType: 'normal',
      hoursSlept: 9,
      createdAt: 808
    }
  }

  const state = dreamsReducer(dreams, action)
  expect(state).toEqual([...dreams, action.dream])
})

test('should edit a dream', () => {
  const newTitle = 'This is an edited dream title'

  const action = {
    type: 'EDIT_DREAM',
    id: dreams[0].id,
    updates: {
      title: newTitle
    }
  }

  const state = dreamsReducer(dreams, action)
  expect(state[0].title).toBe(newTitle)
})

test('should not edit dream if dream not found', () => {
  const newTitle = 'This is an edited dream title'

  const action = {
    type: 'EDIT_DREAM',
    id: '99',
    updates: {
      title: newTitle
    }
  }

  const state = dreamsReducer(dreams, action)
  expect(state).toEqual(dreams)
})