import { useEffect, useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TasksFilter from "./components/TasksFilter"
import { getTasks } from "./services/taskService";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFillter] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        console.log("Error fetching tasks", error);
      }
    }

    fetchData();


  }, [])

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;

    return true;
  })

  return (
    <div>
      <Header />

      <div className="wrapper">
        <TasksFilter currentFilter={filter} onFilterChange={setFillter} />

        <button className="addNewTaskBtn">Add New Task</button>
      </div>

      <TaskList tasks={filteredTasks} />
    </div>
  )
};

export default App;