import { useEffect, useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TasksFilter from "./components/TasksFilter"
import { getTasks } from "./services/taskService";
import { openModal } from "./components/Modal";
import DeleteTaskModal from "./components/DeleteTaskModal";

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

  const handleDeleteClick = (task) => {
    openModal(DeleteTaskModal, {
      task,
      onSuccess: (taskId) => {
        setTasks((prev) => prev.filter((item) => item.id != taskId))
      }
    })
  }

  return (
    <div>
      <Header />

      <div className="wrapper">
        <TasksFilter currentFilter={filter} onFilterChange={setFillter} />

        <button className="addNewTaskBtn">Add New Task</button>
      </div>

      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteClick}/>
    </div>
  )
};

export default App;