// src/pages/NewHabitsPage.js
import React, { useState } from 'react';

const NewHabitsPage = () => {
  const [habits, setHabits] = useState([]);

  const handleAddHabit = (newHabit) => {
    setHabits([...habits, newHabit]);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">New Habits</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const habitName = e.target.habitName.value;
          handleAddHabit({ habitName });
        }}
        className="space-y-4"
      >
        <div>
          <label className="block mb-1">Habit Name:</label>
          <input type="text" name="habitName" className="border p-2 rounded w-full" required />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Habit
        </button>
      </form>

      <ul>
        {habits.map((habit, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>{habit.habitName}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewHabitsPage;
