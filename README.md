# Task Manager App
 this task maanger app where users can create, view, update and delete tasks.

## Used Technologies:
 Frontend: React
 Backend: Node.js, Express.js

## Features
- Create new Tasks
- View all tasks
- Update existing tasks
- Delete tasks


# Installation and Setup

### 1. Clone the repository
 ```bash
git clone https://github.com/B0sto/nika_bostoganashvili_helfy_task.git
cd nika_bostoganashvili_helfy_task
```

### 2. Install dependencies
```bash
cd backend
npm install

cd ../frontend
npm install
```


### 3. Run the application
 Start backend server
 ```bash
cd backend
npm start

cd frontend
npm start
```


### 4. API Endpoints
| Method | Endpoint   | Description        |
|--------|------------|--------------------|
| GET    | /tasks     | Get all tasks      |
| POST   | /tasks     | Create a task      |
| PUT    | /tasks/:id | Update a task      |
| PATCH  | /tasks/:id/toggle | Toggle task completion      |
| DELETE | /tasks/:id | Delete a task      |


### 5. Additional information
Custom infinite loop animation, with no third party libraries
Time spent on frontend: 150 minutes
Time spent on backend: 90 minutes
