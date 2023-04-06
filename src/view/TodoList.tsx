import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addListAction, delListAction } from '../store/actions'

const TodoList = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()
  const { todoList } = useSelector((state: any) => ({
    todoList: state.todoListReducer.todoList,
  }))
  console.log(todoList)
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          setInputValue('')
          dispatch(addListAction(inputValue))
        }}>
        添加
      </button>
      <ul>
        {todoList &&
          todoList.map((item: string, index: number) => (
            <li key={item} onClick={() => dispatch(delListAction(index))}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default TodoList
