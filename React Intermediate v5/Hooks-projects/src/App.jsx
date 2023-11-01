import "./App.css";
import TodoList from "./components/TodoList";
// import { useLayout } from './hooks/useLayout'

function App() {
  // const [value]=useLayout();
  // practice useLayoutEffect with costume hook useLayout;

  return (
    <>
      <TodoList />
      {/* {value} */}
    </>
  );
}

export default App;
