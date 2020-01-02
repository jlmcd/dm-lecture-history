import { createStore } from 'redux'

// INITIAL STATE
const initialState = {
  todo: ['Practice the Piano', 'Figure out the meaning of life']
}

// ACTION CONSTANTS
export const ADD_TO_LIST = 'ADD_TO_LIST'
export const c = 'REMOVE_FROM_LIST'

// REDUCER
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_LIST:
      var newList = [...state.todo, action.payload]
      return {...state, todo: newList}
    case REMOVE_FROM_LIST:
      // eslint-disable-next-line
      var newList = [...state.todo]
      newList.splice(action.payload, 1)
      return {...state, todo: newList}
    default:
      return state
  }
}

// EXPORT THE STORE
export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
