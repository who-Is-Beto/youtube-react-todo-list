import { useContext } from 'react'
import { ToDoContext } from '../ToDoContext'
import '../styles/Nav.css'

function Navbar() {
  const [todos,] = useContext(ToDoContext)
  return (
    <header>
      <nav>
        <div className="logo">
          whoIsBeto To Do List
        </div>

        <div className="todos__number">
          <span>
            You have:
            {' '}
            {todos.length}
            {' '}
            to dos
            </span>
        </div>
      </nav>
    </header>
  )
}

export default Navbar