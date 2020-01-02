import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './ducks/reducer'
import promiseMiddleware from 'redux-promise-middleware'

export default createStore(
  reducer,
  compose(applyMiddleware(promiseMiddleware))
)
