import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import userReducer from './ducks/userReducer'
import swapiReducer from './ducks/swapiReducer'
import promiseMiddleware from 'redux-promise-middleware'

const reducersCombined = combineReducers({ userReducer, swapiReducer })

const enhancers = compose(
  applyMiddleware(promiseMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default createStore(reducersCombined, enhancers)
