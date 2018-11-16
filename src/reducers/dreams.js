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

export default dreamsReducer