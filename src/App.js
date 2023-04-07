import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/header';
import { Schedule } from './components/schedule';
import { DailySchedule } from './components/dailySchedule';
import { db } from './model/firebaseDB';
import { getDocs, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore'




function App() {

  const [tasks, setTasks] = useState();

  const tasksCollectionRef = collection(db, 'tasks');

  const getTasks = async () => {
    try {
      const data = await getDocs(tasksCollectionRef);       
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(), 
        id: doc.id,
      }));
      setTasks(filteredData);
    } catch (error) {
      console.error(error);
    }
  }

  const deleteTask = async (id) => {
    const taskDoc = doc(db, "tasks", id)
    await deleteDoc(taskDoc);
    getTasks();
  }

  const updateTask = async (task) => {
    const taskDoc = doc(db, "tasks", task.id)
    await updateDoc(taskDoc, {
      taskTitle: task.taskTitle,
      taskDescr: task.taskDescr,
      taskDay: task.taskDay,
      taskTime: task.taskTime,
      taskCompleted: task.taskCompleted
    })
    getTasks();
  }

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Header></Header>
      <Schedule tasks={tasks} taskRef={tasksCollectionRef} getTasks={getTasks} deleteTask={deleteTask} updateTask={updateTask}/>
      <DailySchedule tasks={tasks} taskRef={tasksCollectionRef} getTasks={getTasks} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  );
}

export default App;
