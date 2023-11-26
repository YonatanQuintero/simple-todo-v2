import { useTodoContext } from "../../context/TodoContext"

const TodoClearDone = () => {
  const { clearDone } = useTodoContext()
  const clearDoneHandler = () => {
    clearDone()
  }

  return (
    <button type="button" className="btn btn-outline-info text-info" onClick={clearDoneHandler}>
      Clear Done
    </button>
  )
}

export default TodoClearDone
