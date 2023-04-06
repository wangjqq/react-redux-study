export const addAction = (num: number) => {
  return {
    type: 'ADD_NUM',
    payload: {
      num,
    },
  }
}

export const reduceAction = (num: number) => {
  return {
    type: 'REDUCE_NUM',
    payload: {
      num,
    },
  }
}

export const addListAction = (name: string) => {
  return {
    type: 'ADD_LIST',
    payload: {
      name,
    },
  }
}

export const delListAction = (index: number) => {
  return {
    type: 'DEL_LIST',
    payload: {
      index,
    },
  }
}
