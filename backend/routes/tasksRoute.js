const { Router } = require("express");
const tasks = require("../data/tasks");
const validateTask = require("../middleware/validateTask");

const tasksRouter = Router();

tasksRouter.get("/", (req,res) => {
    res.json(tasks)
})

tasksRouter.post("/", validateTask, (req,res) => {
    const { title, description, priority } = req.body;

    const lastTaskId = tasks.length ? tasks[tasks.length - 1].id : 0;

    const newTask = {
        id: lastTaskId + 1,
        title,
        description,
        completed: false,
        createdAt: new Date(),
        priority,

    }

    tasks.push(newTask)

    res.send({ message: "Task has been added successfully", data: newTask })
})


tasksRouter.put("/:id", validateTask, (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    const toUpdateTaskIndex = tasks.findIndex(task => task.id === Number(id));

    if (toUpdateTaskIndex === -1) {
        return res.status(404).json({ message: "Task not found" });
    }

    tasks[toUpdateTaskIndex] = {
        ...tasks[toUpdateTaskIndex],
        title,
        description
    }

    res.json({ message: "Task has been updated successfully", data: tasks[toUpdateTaskIndex] });
})


tasksRouter.delete("/:id", (req,res) => {
    const { id } = req.params;


    const toDeleteTaskIndex = tasks.findIndex(task => task.id === Number(id));

    if (toDeleteTaskIndex === -1) return res.status(404).json({ message: "Task not found", data: null });

    const deletedTask = tasks.splice(toDeleteTaskIndex, 1);

    res.json({ message: "task has been deleted successfully", data:deletedTask[0] });
})

tasksRouter.patch("/:id/toggle", (req,res) => {
    const { id } = req.params;
    const { priority } = req.body;

    const toPatchTaskIndex = tasks.findIndex(task => task.id === Number(id));

    if (toPatchTaskIndex === -1) return res.status(404).json({ message: "Task not found", data: null });

    tasks[toPatchTaskIndex] = {
        ...tasks[toPatchTaskIndex],
        priority
    }

    res.json({ message: "priority status has been changed successfully", data: tasks[toPatchTaskIndex] })

})


module.exports = tasksRouter;