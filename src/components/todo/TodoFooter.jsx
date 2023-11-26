import ThemeToggle from "../theme/ThemeToggle"

const TodoFooter = () => {
  return (
    <footer className="py-4 py-md-5 mt-5 bg-body-tertiary">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 mb-3">
            <p className="m-0 text-center text-muted">Copyright &copy; Simple Todo List V2 2023</p>
            <p className="m-0 text-center text-muted">All rights reserved.</p>
            <p className="m-0 text-center text-muted">Development by Yonatan A Quintero R</p>
          </div>
          <div className="col-12 border-top pt-3">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default TodoFooter
