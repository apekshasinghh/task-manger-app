// src/pages/HealthyLifestylePage.js
import React, { useState } from 'react';

const HealthyLifestylePage = () => {
  const [goals, setGoals] = useState([]);

  const handleAddGoal = (newGoal) => {
    setGoals([...goals, newGoal]);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Healthy Lifestyle Goals</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const goalName = e.target.goalName.value;
          handleAddGoal({ goalName });
        }}
        className="space-y-4"
      >
        <div>
          <label className="block mb-1">Goal Name:</label>
          <input type="text" name="goalName" className="border p-2 rounded w-full" required />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Goal
        </button>
      </form>

      <ul>
        {goals.map((goal, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>{goal.goalName}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthyLifestylePage;
