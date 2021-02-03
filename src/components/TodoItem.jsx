import { useContext } from 'react'
import { ToDoContext } from '../ToDoContext'
import '../styles/ToDoItem.css'

function ToDoItem({ item }) {

  const [todos, setTodos] = useContext(ToDoContext)

  const handleCompleted = () => {
    setTodos(todos.map((element) => {
      if (element.id === item.id) {
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

      <div className="content">
        <p>{item.content}</p>
      </div>

      <div className="options">
        <button
          className={item.status ? 'done' : 'undone'}
          type='button'
          onClick={handleCompleted}
          aria-label="Complete to do elemet"
        >
          <i className='fas fa-check-circle'></i>

        </button>
        <button
          className={item.status ? 'trashDone' : 'trash'}
          type='button'
          onClick={deleteTodoItem}
          aria-label="Delete to do element"
        ><i className="fas fa-trash-alt"></i></button>

      </div>
    </div >
  )
}

export default ToDoItem