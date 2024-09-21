// src/components/TaskRow.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TaskRow = ({ title, path }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(path);
  };

  return (
    <div className="p-4 bg-white rounded shadow-md flex justify-between items-center mb-4">
      <h2 className="text-lg font-bold">{title}</h2>
      <button onClick={handleNavigate} className="bg-blue-500 text-white px-4 py-2 rounded">
        Go to {title}
      </button>
    </div>
  );
};

export default TaskRow;
