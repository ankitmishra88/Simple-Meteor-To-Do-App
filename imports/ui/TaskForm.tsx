import React,{useState} from 'react'
import {TasksCollection} from '../../imports/api/TasksCollection'

export const TaskForm=()=>{
    const [text,setText]=useState("");
    const handleSubmit=e=>{
        e.preventDefault()
        if(!text)
            return
        TasksCollection.insert({
            text:text.trim(),
            createdAt:new Date(),
            priority:1,
        })
        setText("")
    }
    return(
        
            <form className="task-form" onSubmit={handleSubmit}>  
            <input value={text} type="text" placeholder="Type to add a task" onChange={e=>{setText(e.target.value)}}/>
            <button type="submit">Add</button>
            </form>
        
    )
}
