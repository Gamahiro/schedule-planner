import { useState } from 'react';
import './App.css';
import { Header } from './components/header';
import { Schedule } from './components/schedule';





function App() {

const [tasks, setTasks] = useState([]);


  return (
    <div>
    <Header></Header>
   <Schedule tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
