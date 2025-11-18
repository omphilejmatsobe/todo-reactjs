import { useState } from 'react'

function Card(){

    const [task, setTask] = useState(0)
    const updateTask = () => setTask(1)
  return (
    <div>
        {task}
        <div onClick={updateTask}></div>
    </div>
  )
}

export default Card