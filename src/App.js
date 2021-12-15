import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

var id=4;
function App() {
  
  const [tasks,setTasks]=useState([
    
])

const addTask=(task)=>{
  id++;
  const newTask={id,...task};
  setTasks([...tasks,newTask]);
}

const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=>task.id!==id))
}

const toggleReminder=(id)=>{
  setTasks(tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task))
}

return (
    <div className="container">
      <Header  title='Task Manager'/>
      <AddTask onAdd={addTask}/>
      {tasks.length===0?("Nothing To show"):(<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>)}
    </div>
  );
}


export default App;
