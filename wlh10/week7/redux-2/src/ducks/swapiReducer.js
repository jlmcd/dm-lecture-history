import axios from 'axios'

// INITIAL STATE
const initialState = {
  loading: false,
  characters: {results: []}
}

// ACTION CONSTS
const GET_CHARACTERS = 'GET_CHARACTERS'

// ACTION BUILDERS
export const getCharacters = (url) => {
  const promise = axios.get(url).then(res => res.data)
  return {
    type: GET_CHARACTERS,
    payload: promise
  }
}

// REDUCER FUNCTION
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_CHARACTERS + '_PENDING':
      return {...state, loading: true}
    case GET_CHARACTERS + '_FULFILLED':
      return {...state, characters: action.payload, loading: false}
    case GET_CHARACTERS + '_REJECTED':
      return {...state, loading: false}
    default: return state
  }
}


export default reducer