import { useContext } from "react";
import { ToDoContext } from '../ToDoContext'
import ToDoItem from './TodoItem'
import '../styles/ToDoList.css'

function TodoList() {
  const [todos,] = useContext(ToDoContext)

  return (
    <div className='todo__list'>
      {todos.map(item => (
        <ToDoItem
          item={item}
          key={item.id}
        />
      ))}
    </div>
  )
}

export default TodoList