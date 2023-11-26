import TodoTitle from "./TodoTitle"
import TodoStats from "./TodoStats"
import TodoInputAdd from "./TodoInputAdd"
import TodoList from "./TodoList"
import TodoClearDone from "./TodoClearDone"
import TodoFooter from "./TodoFooter"

const TodoIndex = () => {
  return (
    <>
      <main className="container-fluid p-0">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <TodoTitle />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 mb-3">
            <TodoStats />
          </div>
          <div className="col-sm-10 col-md-6 col-lg-4 mb-3 px-4">
            <TodoInputAdd />
            <TodoList />
            <div className="text-end mt-3">
              <TodoClearDone />
            </div>
          </div>
        </div>
      </main>
      <TodoFooter />
    </>
  )
}

export default TodoIndex
