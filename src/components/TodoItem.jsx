import '../styles/ToDoItem.css'

function ToDoItem({ content }) {
  return (
    <div className="todo__item">
      <p>{content}</p>

      <div className="options">
        <button type='button'><i className="fas fa-check-circle done"></i></button>
        <button type='button'><i className="fas fa-trash-alt"></i></button>
      </div>
    </div>
  )
}

export default ToDoItem