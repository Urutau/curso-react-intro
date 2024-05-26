import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


const defaultTodos = [
  { text:'Cortar cebolla', completed: true },
  { text:'Tomar el curso de introducción a React', completed: false },
  { text:'Llorar con la llorona', completed: false },
  { text:'LALALALA', completed: false },
  { text:'Usar estados derivados', completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  // Estos son estados derivados:
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log('Los usuarios buscan ToDos de '+searchValue);

  return (
    <>
      <TodoCounter 
      completed = {completedTodos}
      total = {totalTodos}
      />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
      {defaultTodos.map(todo => (
        <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
        />
      ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;