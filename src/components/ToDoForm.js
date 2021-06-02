import React from 'react';
import '../css/ToDo.css';


// user input - includes validation
function TodoForm({addTodo}){
    const [value,setValue] = React.useState('');
    
    const handleSubmit = e => {
      e.preventDefault();
      if(!value) return;
      addTodo(value);
      setValue('');
    }
  
    return (
      <form className="mt-3" onSubmit={handleSubmit}>
        <input 
          type="text"
          className="handWriting"
          value={value}
          placeholder="Add Todo..."
          onChange={e => setValue(e.target.value)} />
      </form>
    )
  }

  export default TodoForm