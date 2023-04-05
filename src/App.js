import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/header';
import { Schedule } from './components/schedule';
import { db } from './model/firebaseDB';
import { getDocs, collection } from 'firebase/firestore'




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

  useEffect(() => {
    getTasks();
  }, [])

  



  //const [tasks, setTasks] = useState(getTasks().then((result) => {return result}));

  return (
    <div>
      <Header></Header>
      <Schedule tasks={tasks} taskRef={tasksCollectionRef} getTasks={getTasks}/>
    </div>
  );
}

export default App;
