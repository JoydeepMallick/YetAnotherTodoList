import { useState } from 'react'

export function TodoItemForm({ onSubmit }){
    const [newItem, setNewItem] = useState('')
    
    function handleSubmit(e){
        e.preventDefault()        
        if(newItem === '') return
        onSubmit(newItem)
        setNewItem("")
    } 
    //since above function calls setNewItem put the usestate line above it
    
    return (
        <form action="todo-item-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="todo-item">Todo Item</label>
              <input 
                type="text" 
                id="todo-item" 
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
              /> 
            </div>
            <button className="todo-submit">Add Todo</button>
          </form>
    )
    //since above function needs handleSubmit function put it in here
}
