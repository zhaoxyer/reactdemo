import {createStore, combineReducers, applyMiddleware} from 'redux'
import * as userInfo from './reducers/user'
import thunk from 'redux-thunk'
let store = createStore(
  combineReducers({...userInfo}),
  applyMiddleware(thunk)
)

export default store