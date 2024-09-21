// src/components/AddTaskForm.js
import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [date, setDate] = useState('');
  const [reminderTime, setReminderTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { taskName, date, reminderTime };
    onAddTask(newTask);
    setTaskName('');
    setDate('');
    setReminderTime('');
  };

  // Default next day date
  const defaultDate = () => {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-8">
      <div>
        <label className="block mb-1">Task Name:</label>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
      </div>

      <div>
        <label className="block mb-1">Date (Next Day):</label>
        <input
          type="date"
          value={date || defaultDate()}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
      </div>

      <div>
        <label className="block mb-1">Reminder Time:</label>
        <input
          type="time"
          value={reminderTime}
          onChange={(e) => setReminderTime(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
