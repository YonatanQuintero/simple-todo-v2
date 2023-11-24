import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import { ThemeProvider } from './context/ThemeContext';
import TodoIndex from './components/todo/TodoIndex';

function App() {
  return (
    <ThemeProvider>
      <TodoIndex />
    </ThemeProvider>
  );
}
export default App;
