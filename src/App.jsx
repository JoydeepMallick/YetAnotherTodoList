import { useState } from 'react'
import { TodoItemForm } from './TodoItemForm'
import { TodoList } from './TodoList'

export default function App(){
  
  const [todos, setTodos] = useState([])

  function addTodo (title){
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })  
  }

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      {/* you can just return a single element so wrap everything under one*/}
      <TodoItemForm onSubmit={addTodo}/>

      <h1 className="header">TodoList</h1>

      <TodoList todos={todos}/>
    </>
  )
}
