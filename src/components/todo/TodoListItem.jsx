import { useRef } from "react"
const TodoListItem = ({ id, value, toggleTodo, removeTodo }) => {
  const valueRef = useRef(null)
  const inputId = `todo-${id}`

  const toggleTodoHandler = (event) => {
    toggleTodo(id, event.target.checked)
    valueRef.current.classList.toggle("text-decoration-line-through")
  }

  const removeTodoHandler = () => {
    removeTodo(id)
  }

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col">
          <input className="form-check-input me-1" type="checkbox" id={inputId} onChange={toggleTodoHandler} />
          <label className="form-check-label" htmlFor={inputId} ref={valueRef}>
            {value}
          </label>
        </div>
        <div className="col item-action-col text-end">
          <a href="#" className="text-danger" onClick={removeTodoHandler}>
            <i className="bi bi-trash"></i>
          </a>
        </div>
      </div>
    </li>
  )
}

export default TodoListItem
