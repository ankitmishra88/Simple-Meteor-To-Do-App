import React from 'react';



export const Task=({task,onCheckboxClick,deleteTask})=>{
    
    return <li className="task">
        <input type="checkbox" checked={task.isChecked} onClick={()=>onCheckboxClick(task)} readOnly/>
        <span>{task.text}</span>
        <button onClick={()=>deleteTask(task)}>&times;</button>
        </li>
}
