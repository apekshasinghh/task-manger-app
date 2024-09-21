// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import DailyTasksPage from './pages/DailyTasksPage';
import NewHabitsPage from './pages/NewHabitsPage';
import HealthyLifestylePage from './pages/HealthyLifestylePage';
import TravelManagerPage from './pages/TravelManagerPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dailytasks" element={<DailyTasksPage />} />
        <Route path="/newhabits" element={<NewHabitsPage />} />
        <Route path="/healthylifestyle" element={<HealthyLifestylePage />} />
        <Route path="/travelmanager" element={<TravelManagerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
