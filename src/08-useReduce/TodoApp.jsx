import { useCallback, useEffect, useReducer, useState } from "react"
import { TodoAdd, TodoList2, todoReducer } from "./";
import { useTodo } from "../hooks/useTodo";



export const TodoApp = () => {
    
    const { todos, allTodos, pendingTodos, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo();


  return (
    <>
        <h1>Todo App ( { allTodos } ),  <small>pendientes: ( { pendingTodos } ) </small></h1>
        <hr />


        <div className="row">
            <div className="col-7">
                <TodoList2 
                    todos={ todos } 
                    onDeleteTodo={ handleDeleteTodo } 
                    onToggleTodo={ handleToggleTodo }
                />
            </div>


            <div className="col-5">
                <h4>Agregar Todo</h4>
                <hr />
                
                <TodoAdd newtodo={ handleNewTodo } />
            </div>
        </div>

    </>
  )
}
