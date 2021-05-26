import React from 'react';
import ToDo from './ToDo.js';
import ToDoForm from './ToDoForm.js';


function ToDoComponent(){

    const [todos, setTodos] = React.useState([
        {
          text: 'learn react',
          isCompleted: false,
        },
        {
          text: 'meet friend for lunch',
          isCompleted: false,
        },
        {
          text: 'build todo app',
          isCompleted: false,
        }        
      ]);
    
      const addTodo = text => {
        const newTodos = [...todos, {text, isCompleted:false}];
        setTodos(newTodos);
      }
      const removeTodo = index => {
        let temp = [...todos];    
        temp.splice(index, 1);
        setTodos(temp);
      }
    
      return(
        <div className="app">
          <div className="todo-list" >
            {todos.map((todo, i) => (
              <ToDo key={i} index={i} todo={todo} remove={removeTodo}/>
            ))}
            <ToDoForm addTodo={addTodo} />
          </div>
        </div>
      );

}

export default ToDoComponent