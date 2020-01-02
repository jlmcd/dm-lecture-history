import { createStore } from 'redux'

// INITIAL STATE
const initialState = {
  todo: ['Practice the piano', 'Figure out the meaning of life']
}

// ACTION CONSTANTS
export const ADD_TO_LIST = 'ADD_TO_LIST'
export const REMOVE_FROM_LIST = 'REMOVE_FROM_LIST'


// REDUCER FUNCTION
function reducer(state = initialState, action) {
  switch (action.type) {
    case REMOVE_FROM_LIST:
      let updatedList = [...state.todo]
      updatedList.splice(action.payload, 1)
      return Object.assign({}, state, {todo: updatedList})
    case ADD_TO_LIST:
      let newTodo = [...state.todo, action.payload]
      return Object.assign({}, state, {todo: newTodo})
    default:
      return state
  }
}

// CREATE STORE
export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)