import { getFirestore, collection, getDocs, setDoc, doc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import {v4 as uuidv4 } from 'uuid';

const firebaseConfig = {
  apiKey: "AIzaSyAv5tykwkP-hDD6tF-qqJo6emkHfeCBRkU",
  authDomain: "schedule-planner-c6497.firebaseapp.com",
  projectId: "schedule-planner-c6497",
  storageBucket: "schedule-planner-c6497.appspot.com",
  messagingSenderId: "116679665631",
  appId: "1:116679665631:web:494381f46b46e58296c66a",
  measurementId: "G-Z14XNXMXNP"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const taskRef = collection(db, 'tasks');

async function taskToDB(task) {
    await setDoc(doc(db, 'tasks', uuidv4()), {
        taskTitle: task.taskTitle,
        taskTime: task.taskTime,
        taskDay: task.taskDay,
        taskComplete: task.completed,
        taskDescr: task.taskDescr
    });
    console.log(task)
}

async function getTasks() {
    const taskSnapshot = await getDocs(taskRef);
    const taskarr = [];
    taskSnapshot.forEach((doc) => {
        taskarr.push(doc.data())
    })
    return taskarr;
}



export {db, getTasks, taskToDB}