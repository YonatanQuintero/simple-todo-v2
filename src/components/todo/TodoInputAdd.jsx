import { useEffect, useState, useRef } from "react"
import { useTodoContext } from "../../context/TodoContext"

const TodoInputAdd = () => {
  const { addTodo } = useTodoContext()
  const inputRef = useRef(null)
  const [value, setValue] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    if (isCompleted) {
      inputRef.current.focus()
      setValue("")
      setIsCompleted(false)
    }
  }, [isCompleted])

  const addHandler = () => {
    if (value.length < 1) {
      alert("Please enter a value")
      return
    }
    addTodo(value)
    setIsCompleted(true)
  }
  const valueHandler = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        value={value}
        onChange={valueHandler}
        ref={inputRef}
        className="form-control"
        autoFocus
        placeholder="What do you need to do?"
        aria-label="What do you need to do?"
        aria-describedby="add-todo"
      />
      <button className="btn btn-outline-info" type="button" id="add-todo" onClick={addHandler}>
        Add
      </button>
    </div>
  )
}

export default TodoInputAdd
