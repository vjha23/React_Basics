import React from 'react';
import Todo from './components/todo'
import './style.css';
import todoData from './todoData';

function App(){

const TodoRender=todoData.map(item=>
    <Todo key={item.id} Todo={item}/>
  )

  return (
    <div className="todo-list">
         {TodoRender}
    </div>
  )
}

export default App;
