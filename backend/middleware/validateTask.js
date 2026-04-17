const tasks = require("../data/tasks")

const validateTask = (req,res,next) => {
    if (!req.body.title || !req.body.description) {
        return res.status(400).json({ message: "title, description and prioirty are required", data:null });
    }
    const {title } = req.body;

    const exists = tasks.some(task => task.title === title);

    if (exists) return res.status(400).json({ message: "task with this title already exists", data:null })
    next();
}

module.exports = validateTask