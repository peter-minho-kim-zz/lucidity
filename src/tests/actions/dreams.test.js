import { addDream, editDream, removeDream } from '../../actions/dreams'

test('should setup remove dream action object', () => {
  const action = removeDream({ id: '123' })
  expect(action).toEqual({
    type: 'REMOVE_DREAM',
    id: '123'
  })
})

test('should setup edit dream action object', () => {
  const action = editDream('123', {title: 'this is a test title'} )
  expect(action).toEqual({
    type: 'EDIT_DREAM',
    id: '123',
    updates: {
      title: 'this is a test title'
    }
  })
})

test('should setup add dream action object with provided values', () => {
  const dreamData = {
    title: 'TEST TITLE',
    entry: 'TEST ENTRY',
    hoursSlept: 7,
    dreamType: 'lucid',
    createdAt: 999999,
  }

  const action = addDream(dreamData)
  expect(action).toEqual({
    type: 'ADD_DREAM',
    dream: {
      ...dreamData,
      id: expect.any(String)
    }
  })
})

test('should setup add dream action object with default values', () => {
  const action = addDream()
  expect(action).toEqual({
    type: 'ADD_DREAM',
    dream: {
      id: expect.any(String),
      title: '',
      entry: '',
      hoursSlept: 0,
      dreamType: '',
      createdAt: 0
    }
  })
})