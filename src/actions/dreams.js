import uuid from 'uuid'

// ADD_DREAM
export const addDream = ({ title = '', entry = '', hoursSlept = 0, dreamType = '', createdAt = 0, lucidityLevel = 0 } = {}) => ({
  type: 'ADD_DREAM',
  dream: {
    id: uuid(),
    title,
    entry,
    hoursSlept,
    dreamType,
    createdAt,
    lucidityLevel
  }
})

// REMOVE_DREAM
export const removeDream = ({ id }) => ({
  type: 'REMOVE_DREAM',
  id
})

// EDIT_DREAM
export const editDream = (id, updates) => ({
  type: 'EDIT_DREAM',
  id,
  updates
})