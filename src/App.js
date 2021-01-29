import './App.css';
import ToDoInput from './components/ToDoInput'
import TodoList from './components/TodoList'

function App() {
  return (
    <>
      <div className="wrapper">
        <ToDoInput />
        <TodoList />
      </div>
    </>
  );
}

export default App;
