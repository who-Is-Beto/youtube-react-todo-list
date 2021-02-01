import { useState } from 'react'
import './App.css';
import ToDoInput from './components/ToDoInput'
import TodoList from './components/TodoList'
import { ToDoProvider } from './ToDoContext'


function App() {
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  return (
    <ToDoProvider>
      <div className="wrapper">
        <ToDoInput
          setStatus={setStatus}
          status={status}
          filteredTodos={filteredTodos}
          setFilteredTodos={setFilteredTodos}
        />
        <TodoList filteredTodos={filteredTodos} />
      </div>
    </ToDoProvider>
  );
}

export default App;
