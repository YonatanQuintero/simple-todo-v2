import TodoListItem from "./TodoListItem"

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoListItem key={todo.id} id={todo.id} value={todo.value} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      ))}
    </ul>
  )
}

export default TodoList
