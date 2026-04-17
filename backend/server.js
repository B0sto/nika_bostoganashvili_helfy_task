const express = require("express");
const port = 4000;

const app = express();
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})

