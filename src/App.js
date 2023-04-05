import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/header';
import { Schedule } from './components/schedule';
import { getTasks, taskToDB } from './model/firebaseDB';





function App() {

  const [tasks, setTasks] = useState();

  useEffect(() => {
    getTasks()
    .then(data => setTasks(data))
    
  }, [])

  



  //const [tasks, setTasks] = useState(getTasks().then((result) => {return result}));

  return (
    <div>
      <Header></Header>
      <Schedule tasks={tasks} setTasks={tasks} />
    </div>
  );
}

export default App;
