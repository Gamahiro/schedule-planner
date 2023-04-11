import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Layout } from './pages/Layout';
import { WeeklySchedule } from './pages/WeeklySchedule';
import { getTasks } from './model/firebaseDB';
import { DailyTasks } from './pages/DailyTasks';
import { Register } from './pages/Register';
import { LandingPage } from './pages/LandingPage';

function App() {

  const [tasks, setTasks] = useState();

  const tasksUpdate = async () => {
    setTasks(await getTasks());
  }

  useEffect(() => {
    tasksUpdate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home tasks={tasks} tasksUpdate={tasksUpdate} />} />
          <Route path='weeklyschedule' element={<WeeklySchedule tasks={tasks} tasksUpdate={tasksUpdate} />} />
          <Route path='dailytasks' element={<DailyTasks tasks={tasks} tasksUpdate={tasksUpdate} />} />
          <Route path='register' element={<Register />} />
        </Route>
          <Route path='landingpage' element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
