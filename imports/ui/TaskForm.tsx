import { Meteor } from 'meteor/meteor';
import React,{useState} from 'react'


export const TaskForm=({user})=>{
    if(!user)
        return
    
    const [text,setText]=useState("");
    const handleSubmit=e=>{
        e.preventDefault()
        if(!text)
            return
        Meteor.call('tasks.insert',text)
        setText("")
    }
    return(
        
            <form className="task-form" onSubmit={handleSubmit}>  
            <input value={text} type="text" placeholder="Type to add a task" onChange={e=>{setText(e.target.value)}}/>
            <button type="submit">Add</button>
            </form>
        
    )
}
