const TodoClearDone = ({ clearDone }) => {
  const clearDoneHandler = () => {
    clearDone()
  }
  return (
    <button type="button" className="btn btn-info text-white" onClick={clearDoneHandler}>
      Clear Done
    </button>
  )
}

export default TodoClearDone
