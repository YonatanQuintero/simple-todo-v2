import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import { ThemeProvider } from './context/ThemeContext';
import { TodoProvider } from './context/TodoContext';
import TodoIndex from './components/todo/TodoIndex';

function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <TodoIndex />
      </TodoProvider>
    </ThemeProvider>
  );
}
export default App;
