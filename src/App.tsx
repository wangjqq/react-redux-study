import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import CountButton from './view/CountButton'
import CountNum from './view/CountNum'
import TodoList from './view/TodoList'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CountButton></CountButton>
        <CountNum></CountNum>
        <TodoList></TodoList>
      </div>
    </Provider>
  )
}

export default App
