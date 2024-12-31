export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }){
    return(
        <li>
              <label htmlFor="check">
                <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)}/>
                {title}
              </label>
              <button onClick={() => deleteTodo(id)} className="delete">Delete</button>
            </li>
    )
}