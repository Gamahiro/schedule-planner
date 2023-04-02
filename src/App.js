import { useState } from 'react';
import './App.css';
import { Header } from './components/header';
import { Schedule } from './components/schedule';
import { taskObj } from './model/task';

let newTask = new taskObj('Work', 900, 1, 'Just chill');
let newTask2 = new taskObj('Groceries', 1200, 2, 'Just chill2');
let newTask3 = new taskObj('Date', 2100, 2, 'Just chill2');
let newTask4 = new taskObj('Code', 1400, 3, 'Just chill2');
let newTask5 = new taskObj('Shopping', 1800, 5, 'Just chill2');
let newTask6 = new taskObj('Exercise', 1200, 7, 'Just chill2');




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
