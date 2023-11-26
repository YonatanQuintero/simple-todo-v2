import TodoListItem from "./TodoListItem"
import { useTodoContext } from "../../context/TodoContext"

const TodoList = () => {
  const { state } = useTodoContext()

  return (
    <ul className="list-group">
      {state.todos.map((todo) => (
        <TodoListItem key={todo.id} id={todo.id} value={todo.value} />
      ))}
    </ul>
  )
}

export default TodoList
