
const Home = (props) => {

    let taskTitle = 'not defined';
    let taskTime = 'not defined';
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentDayTasks = [];

    if (props.tasks === undefined) return;
    props.tasks.forEach(element => {
        if (element.taskDay === currentDay) currentDayTasks.push(element)
        else return
    });

    const sortedTasks = currentDayTasks.sort(function (a, b) {
        return a.taskTime.localeCompare(b.taskTime)
    })

    taskTitle = sortedTasks[0].taskTitle
    taskTime = sortedTasks[0].taskTime

    return (
        <div>
            <h2>Welcome back, name</h2>
            <h3> Your first task of the day is: {taskTitle} at {taskTime}</h3>
        </div>
    );
}

export { Home }