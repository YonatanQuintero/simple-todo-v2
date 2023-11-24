import { useState, useEffect } from "react"
import TodoTitle from "./TodoTitle"
import TodoStats from "./TodoStats"
import TodoInputAdd from "./TodoInputAdd"
import TodoList from "./TodoList"
import TodoClearDone from "./TodoClearDone"
import ThemeToggle from "../theme/ThemeToggle"

const TodoIndex = () => {
  const [todos, setTodos] = useState([])
  const [stats, setStats] = useState({ total: 0, todo: 0, done: 0 })

  // Fetch data
  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch("/data/todos.json")
        setTodos(await response.json())
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    })()
  }, [])

  // Re-render todo stats
  useEffect(() => {
    const total = todos.length
    const todo = todos.filter((todo) => !todo.done).length
    const done = todos.filter((todo) => todo.done).length
    setStats({ total, todo, done })
  }, [todos])

  // Add new todo and re-render todos
  const addTodo = (value = "") => {
    const last = todos[todos.length - 1]
    const newTodo = {
      id: last ? last.id + 1 : 1,
      value: value,
      done: false,
    }
    setTodos([...todos, newTodo])
  }

  // Toggle todo and re-render todos
  const toggleTodo = (id, done) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: done } : todo)))
  }

  // Remove todo and re-render todos
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  // Clear done and re-render todos
  const clearDone = () => {
    setTodos(todos.filter((todo) => !todo.done))
  }

  return (
    <div className="container-fluid p-0">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <TodoTitle />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12 mb-3">
          <TodoStats total={stats.total} todo={stats.todo} done={stats.done} />
        </div>
        <div className="col-sm-10 col-md-6 col-lg-4 mb-3">
          <TodoInputAdd addTodo={addTodo} />
          <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
          <div className="text-end mt-3">
            <TodoClearDone clearDone={clearDone} />
          </div>
        </div>
      </div>
      <hr />
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

export default TodoIndex
