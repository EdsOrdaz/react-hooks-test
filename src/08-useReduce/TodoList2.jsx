import { TodoItem } from "./"

export const TodoList2 = ( { todos = [], onDeleteTodo, onToggleTodo } ) => {



  return (
    <>
        <ul className="list-group">
        {
            todos.map( todo => (
                <TodoItem key={ todo.id } 
                  item={ todo } 
                  onDeleteTodo={ onDeleteTodo } 
                  onToggleTodo={ onToggleTodo } />
            ))
        }
        </ul>
    </>
  )
}
