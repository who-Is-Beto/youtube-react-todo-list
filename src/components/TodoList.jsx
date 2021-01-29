import { useContext } from "react";
import { ToDoContext } from '../ToDoContext'
import ToDoItem from './TodoItem'
import '../styles/ToDoList.css'

function TodoList() {
  const [todos,] = useContext(ToDoContext)

  return (
    <div className='todo__list'>
      {todos.map(item => (
        <ToDoItem content={item.content} key={item.id} />
      ))}
    </div>
  )
}

export default TodoList