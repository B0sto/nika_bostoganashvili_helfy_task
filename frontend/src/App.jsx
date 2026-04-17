import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TasksFilter from "./components/TasksFilter"

function App() {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <TasksFilter />

        <button className="addNewTaskBtn">Add New Task</button>
      </div>

      <TaskList />
    </div>
  )
};

export default App;