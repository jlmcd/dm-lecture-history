// INITIAL STATE
const initialState = {
  username: ''
}

// ACTION CONSTANTS
const UPDATE_USERNAME = 'UPDATE_USERNAME'

// ACTION BUILDERS
export const updateUsername = (username) => {
  return {
    type: UPDATE_USERNAME,
    payload: username
  }
}

// REDUCER FUNCTION
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERNAME: 
      return {...state, username: action.payload}
    default: return state
  }
}

export default reducer