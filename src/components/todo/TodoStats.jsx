import TodoStatItem from "./TodoStatItem"
import { useTodoContext } from "../../context/TodoContext"
const TodoStats = () => {
  const { state } = useTodoContext()
  const { stats } = state
  const { total, todo, done } = stats
  return (
    <div className="bg-info-subtle py-3 border-bottom border-1 border-black">
      <h1 className="text-center display-4 fw-bold text-white"></h1>
      <div className="row justify-content-center">
        <div className="col-sm-8 col-md-6 col-lg-4 text-center">
          <div className="row">
            <div className="col">
              <TodoStatItem value={todo} title={"To do"} />
            </div>
            <div className="col">
              <TodoStatItem value={done} title={"Done"} />
            </div>
            <div className="col">
              <TodoStatItem value={total} title={"Total"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoStats
