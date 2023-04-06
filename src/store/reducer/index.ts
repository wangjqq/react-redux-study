import { countReducer } from './count'
import { todoListReducer } from './todoList'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  countReducer,
  todoListReducer,
})

export default rootReducer
