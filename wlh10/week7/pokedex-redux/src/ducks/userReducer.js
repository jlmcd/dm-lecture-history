// INITIAL STATE
const initialState = {
  user: ''
}

// ACTION CONSTANTS
const SET_USER = 'SET_USER'

// ACTION BUILDERS
export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user
  }
}

// REDUCER
function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_USER:
      return {...state, user: action.payload}
    default: return state
  }
}

export default reducer