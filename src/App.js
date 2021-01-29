import './App.css';
import ToDoInput from './components/ToDoInput'
import TodoList from './components/TodoList'
import { ToDoProvider } from './ToDoContext'

function App() {
  return (
    <ToDoProvider>
      <div className="wrapper">
        <ToDoInput />
        <TodoList />
      </div>
    </ToDoProvider>
  );
}

export default App;
