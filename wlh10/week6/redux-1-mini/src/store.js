import { createStore } from 'redux'

// INITIAL STATE
const initialState = {
  currentValue: 0
}

// ACTION CONSTS
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, currentValue: state.currentValue + action.amount }
    case DECREMENT:
      return { ...state, currentValue: state.currentValue - action.amount }
    default:
      return state
  }
}

// EXPORT THE STORE BY DEFAULT
export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
