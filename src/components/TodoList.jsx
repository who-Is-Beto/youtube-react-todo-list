import ToDoItem from './TodoItem'
import '../styles/ToDoList.css'

function TodoList() {
  return (
    <div className='todo__list'>
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>
  )
}

export default TodoList