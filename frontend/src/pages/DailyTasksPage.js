// src/pages/DailyTasksPage.js
import React, { useState } from 'react';
import AddTaskForm from '../components/AddTaskForm';

const DailyTasksPage = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Daily Tasks</h1>

      {/* Show the form for adding new tasks */}
      <AddTaskForm onAddTask={handleAddTask} />

      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>{task.taskName} - {task.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyTasksPage;
