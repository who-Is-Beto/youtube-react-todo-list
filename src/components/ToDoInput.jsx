import { useContext, useState, useEffect } from 'react'
import { ToDoContext } from '../ToDoContext'
import '../styles/ToDoInput.css'

function ToDoInout({ setStatus, status, setFilteredTodos }) {
  const [todos, setTodos] = useContext(ToDoContext)
  const [inputValue, setInputValue] = useState('')

  const updateInputValue = (event) => {
    setInputValue(event.target.value)
  }

  const addTodo = (event) => {
    event.preventDefault()
    if (inputValue === '') {
      alert('You most to write something in the input D:')
    } else {
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          content: inputValue,
          status: false,
          id: Math.random() * 1000,
        },
      ])
      setInputValue('')
    }
  }

  const handleSelect = (event) => {
    setStatus(event.target.value)
  }

  const handleFilter = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((item) => item.status === true))
        break

      case 'uncompleted':
        setFilteredTodos(todos.filter((item) => item.status === false))
        break

      default:
        setFilteredTodos(todos)
    }
  }

  useEffect(() => {
    handleFilter()
  }, [todos, status])
  return (
    <>
      <div className="input__container">
        <form onSubmit={addTodo}>
          <input
            value={inputValue}
            type="text"
            placeholder='Plan?'
            onChange={updateInputValue}
          />
          <button className='input__button'><i className="fas fa-check"></i></button>
        </form>

        <select onChange={handleSelect} name="todos" className='filter__todo'>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </>
  )
}

export default ToDoInout