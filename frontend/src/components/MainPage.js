// src/components/MainPage.js
import React from 'react';
import TaskRow from './TaskRow';

const MainPage = () => {
  const navigateToPage = (page) => {
    // This function will handle navigation to different pages
    window.location.href = `/${page.toLowerCase().replace(/\s+/g, '')}`;
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Task Manager</h1>

      <div className="space-y-4">
        <TaskRow title="Daily Tasks" onNavigate={() => navigateToPage('Daily Tasks')} />
        <TaskRow title="New Habits" onNavigate={() => navigateToPage('New Habits')} />
        <TaskRow title="Healthy Lifestyle" onNavigate={() => navigateToPage('Healthy Lifestyle')} />
        <TaskRow title="Travel Manager" onNavigate={() => navigateToPage('Travel Manager')} />
      </div>
    </div>
  );
};

export default MainPage;
