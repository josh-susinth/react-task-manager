import {useState} from'react'
const AddTask = ({onAdd}) => {
    const[task,setTask]=useState('');
    const[date,setDate]=useState('');
    const[reminder,setReminder]=useState(false);
    
    const onSubmit=(e)=>{
        e.preventDefault();
        if(!task)
        alert("enter task");

        onAdd({task,date,reminder});

        setTask('');
        setDate('');
        setReminder(false);

        
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type='text' placeholder="Add Task" value={task} onChange={(e)=>setTask(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>Day & Date</label>
                <input type='text' placeholder="Add Day & Date" value={date} onChange={(e)=>setDate(e.target.value)}></input>
            </div>
            <div className="form-control form-control-check">
                <label>Reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}></input>
            </div>
            <input type='submit' value='Add Task' className="btn btn-block"></input>
            

        </form>
    )
}

export default AddTask
