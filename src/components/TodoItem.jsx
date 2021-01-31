import { useContext } from 'react'
import { ToDoContext } from '../ToDoContext'
import '../styles/ToDoItem.css'

function ToDoItem({ item }) {

  const [todos, setTodos] = useContext(ToDoContext)

  const handleCompleted = () => {
    setTodos(todos.map((element) => {
      if (element.id === item.id) {
        console.log(element)
        return {
          ...element,
          status: !element.status
        }
      } else {
        return element
      }
    }))
  }

  const deleteTodoItem = () => {
    setTodos(todos.filter((el) => el.id !== item.id))
  }

  return (
    <div className={item.status ? 'item__completed' : 'todo__item'}>
      <p>{item.content}</p>

      <div className="options">
        <button className={item.status ? 'done' : 'undone'} type='button' onClick={handleCompleted}>
          <i className="fas fa-check-circle undone"></i></button>
        <button className='trash' type='button' onClick={deleteTodoItem} ><i className="fas fa-trash-alt"></i></button>
      </div>
    </div>
  )
}

export default ToDoItem