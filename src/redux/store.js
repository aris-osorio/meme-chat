import { createStore, combineReducers } from 'redux'
import { chatReducer } from './reducer'

const rootReducer = combineReducers({ chatReducer: chatReducer });

export default createStore(rootReducer);