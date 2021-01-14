import React from 'react'
import {Task} from './Task'
import { TasksCollection } from '../../imports/api/TasksCollection';
import {useTracker} from 'meteor/react-meteor-data'


const toggleChecked=({_id,isChecked})=>{
    TasksCollection.update(_id,{
        $set:{
            isChecked:!isChecked
        }
    })
}

const deleteTask=({_id})=>{
    TasksCollection.remove(_id)
}

export const Tasks=({user,hideCompleted})=>{
    const hideCompletedFilter={isChecked:{$ne:true}}
    const userOnlyFilter=user?{user:user._id}:{}
    const pendingOnlyFilter={...hideCompletedFilter,...userOnlyFilter}
    const tasks = useTracker(() => {
        if (!user) {
          return [];
        }
    
        return TasksCollection.find(
          hideCompleted ? pendingOnlyFilter : userOnlyFilter,
          {
            sort: { createdAt: -1 },
          }
        ).fetch();
      });
    return (
    <div className="task-container">
        <ul className="tasks">
        {tasks.map(task=><Task key={task._id} task={task} deleteTask={deleteTask} onCheckboxClick={toggleChecked}/>) }  
        </ul>
        
    </div>
)}