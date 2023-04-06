import React from 'react'
import { useDispatch } from 'react-redux'
import { addAction, reduceAction } from '../store/actions'

const CountButton = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(addAction(10))}>+10</button>
      <button onClick={() => dispatch(reduceAction(2))}>-2</button>
    </div>
  )
}

export default CountButton
