import { getFirestore, collection, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

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
const auth = getAuth(app);

let tasksCollectionRef = '';

auth.onAuthStateChanged(user => {
    if(user) {
        tasksCollectionRef = collection(db, auth.currentUser.uid);
    }
})


const getTasks = async () => {
        try {
            const data = await getDocs(tasksCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            return filteredData;
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



export { db, getTasks, deleteTask, updateTask, tasksCollectionRef, auth }