import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Layout } from './pages/Layout';
import { WeeklySchedule } from './pages/WeeklySchedule';
import {  auth, getTasks } from './model/firebaseDB';
import { DailyTasks } from './pages/DailyTasks';
import { Register } from './pages/Register';
import { LandingPage } from './pages/LandingPage';

function App() {

  const [tasks, setTasks] = useState();

  auth.onAuthStateChanged(async (user) => {
    if(user) {
      await tasksUpdate()
    }

  })
  const tasksUpdate = async () => {

    setTasks(await getTasks());
  }



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path='home' element={<Home tasks={tasks} tasksUpdate={tasksUpdate} />} />
          <Route path='weeklyschedule' element={<WeeklySchedule tasks={tasks} tasksUpdate={tasksUpdate} />} />
          <Route path='dailytasks' element={<DailyTasks tasks={tasks} tasksUpdate={tasksUpdate} />} />
          <Route path='register' element={<Register />} />
        </Route>
          <Route index element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;
