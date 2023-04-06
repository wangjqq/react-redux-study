import React from 'react'
import { useSelector } from 'react-redux'

const CountNum = () => {
  const { count } = useSelector((state: any) => ({
    count: state.countReducer.count,
  }))
  return <div>{count}</div>
}

export default CountNum
