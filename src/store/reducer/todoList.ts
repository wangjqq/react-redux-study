const initialState = {
  todoList: ['wjq', 'qjw', 'qwj'],
}

export const todoListReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_LIST':
      const newlist = [...state.todoList]
      newlist.push(action.payload.name)
      return {
        ...state,
        todoList: newlist,
      }
    case 'DEL_LIST':
      return {
        ...state,
        todoList: state.todoList.filter(
          (item: any, index: number) => index !== action.payload.index
        ),
      }
    default:
      return state
  }
}
