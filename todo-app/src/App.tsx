"use client"

import { useState } from "react";
import './App.css'

interface comp 
{
    task:string
    disable:boolean
}

export default function App() {
    const [allTasks, setAllTasks] = useState<comp[]>([])
    const [currTask, setCurrTask] = useState("")
    const [changedTask, setChangedTask] = useState("")

    const onTaskSubmit = () =>
    {
        if (currTask == "")
            alert("Add Task")
        else
        {
            
            const newTaskItem: comp = 
            {
                task: currTask,
                disable: true
            }
            setAllTasks([...allTasks, newTaskItem])
            setCurrTask("")
        }
    }

    const onTaskRemove = (index:number) =>
    {
        setAllTasks(allTasks.filter(item => item !== allTasks[index]))
    }

    const onTaskEdit = (index:number) =>
    {
        const copy:comp[] = [...allTasks]
        if (copy[index].disable)
        {
            setChangedTask(allTasks[index].task)
            copy[index].disable = false
            setAllTasks([...copy])
        }
        else
        {
            if (changedTask == "")
            {
                copy[index].disable = true
                setAllTasks([...copy])
                setChangedTask("")
                return
            } 
            copy[index].task = changedTask
            copy[index].disable = true
            setAllTasks([...copy])
            setChangedTask("")
        }
    
    }
  return (
      <div className="container">
          <div className="wrapper">
              <div className="heading_container">
                      <div>
                          Daily tasks
                      </div>
              </div>

              <section className="task_section">
                <div className="task_add">
                    <input placeholder="New Task..." onChange={e => setCurrTask(e.target.value)} value={currTask}  className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                        
                    </input>
 
                    <div className="comp_buttons">
                        <div onClick={onTaskSubmit}>Add New Task</div>
                    </div>
                </div>

                {
                    allTasks.map((task, i)=>
                    (
                    <div key={"task_"+i} className="comp_container">
                        {
                            !task.disable?
                            <input placeholder="Edit task" onChange={e => setChangedTask(e.target.value)} value={changedTask}>
                            </input> :
                            <div className="task">
                            {task.task}
                            </div>
                        }
    
                        <div className="comp_buttons">
                            <div onClick={()=>{onTaskEdit(i)}}>
                                {
                                    task.disable? "Edit" : "Save"
                                }
                            </div>
                            <div onClick={()=>{onTaskRemove(i)}}>Delete</div>
                        </div>
                    </div>
                    ))
                }
              </section>
          </div>
      </div>
  );
}
