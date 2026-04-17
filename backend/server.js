const express = require("express");
const cors = require("cors");
const tasksRouter = require("./routes/tasksRoute");
const port = 4000;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/tasks", tasksRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})

