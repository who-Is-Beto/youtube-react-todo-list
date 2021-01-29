import '../styles/ToDoInput.css'

function ToDoInout() {
  return (
    <>
      <div className="input__container">
        <input type="text" placeholder='Plan?' />

        <select name="todos" className='filter__todo'>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </>
  )
}

export default ToDoInout