// index.js

// Importing needed Packeges
const express = require('express');
const bodyParser = require('body-parser');
const taskController = require('./controllers/TaskController');

// db instance connection
require('./config/db');

const app = express();

// Defining the port for Environment
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    const ready = {
        status: "Welcome to Ikhwan task",
    }

    res.status(200).send(ready)
})

// API ENDPOINTS
app
  .route('/tasks')
  .get(taskController.listAllTasks)
  .post(taskController.createNewTask);

app
  .route('/tasks/:taskid')
  .get(taskController.readTask)
  .put(taskController.updateTask)
  .delete(taskController.deleteTask);

// Console the app is listening success message with port present
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
