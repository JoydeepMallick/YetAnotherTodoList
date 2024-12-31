export function TodoList({ todos }){

    return(
        <ul className="list">
        {/* below is a concept of shortcircuiting! So much shit🤮 */}
        {todos.length === 0 && "No Todos"}
        {todos.map(todo =>{
          return(
            <li key={todo.id}>
              <label htmlFor="check">
                <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)}/>
                {todo.title}
              </label>
              <button onClick={() => deleteTodo(todo.id)} className="delete">Delete</button>
            </li>
          )
        })}
      </ul>
    )
}