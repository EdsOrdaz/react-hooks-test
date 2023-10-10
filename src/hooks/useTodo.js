import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReduce";

const initialState = [];

const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, initialState, init)
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    
    const handleNewTodo = (todo) => {
        const action = {
            type: 'add',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: 'delete',
            payload: id
        })
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: 'toggleTodo',
            payload: id
        })
    }

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    allTodos: todos.length,
    pendingTodos: todos.filter(todo => todo.done).length,
  }
}
