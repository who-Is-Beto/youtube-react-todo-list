import '../styles/ToDoItem.css'

function ToDoItem() {
  return (
    <div className="todo__item">
      <p>Wash the dishes</p>

      <div className="options">
        <button type='button'><i class="fas fa-check-circle done"></i></button>
        <button type='button'><i class="fas fa-trash-alt"></i></button>
      </div>
    </div>
  )
}

export default ToDoItem