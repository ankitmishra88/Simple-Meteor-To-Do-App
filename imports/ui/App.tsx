import React, { Fragment, useState } from 'react';
import {Tasks} from './Tasks'
import {TaskForm} from './TaskForm'
import { useTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '../db/TasksCollection';
import {LoginForm} from './Login'

export const App = () => {
  const user=useTracker(()=>Meteor.user())
  const [hideCompleted,setHideCompleted]=useState(false)
  const hideCompletedFilter={isChecked:{$ne:true}}
  const userOnlyFilter=user?{user:user._id}:{}
  const pendingOnlyFilter={...hideCompletedFilter,...userOnlyFilter}
  const pendingTasksCount = useTracker(() =>
    {
      if(!user){
        return 0
      }
      return TasksCollection.find(hideCompletedFilter?pendingOnlyFilter:userOnlyFilter).count()
    }
  );
  
  const totalPending=pendingTasksCount?`(${pendingTasksCount})`:``
  
  return (
 
  <div className="app">
    <header>
    <div className="app-bar">
          <div className="app-header">
            <h1>📝️ Simple Meteor To do App!{totalPending}</h1>
          </div>
      </div>
    </header>
    <div className="main">
    {user?(
          <Fragment>
          <TaskForm user={user} />
          <div className="filter">
            <button onClick={()=>{setHideCompleted(!hideCompleted)}}>{hideCompleted?'ShowAll':'Hide Completed'}</button>
          </div>
          <Tasks user={user} hideCompleted={hideCompleted} />
          </Fragment>
    ):(
      <LoginForm/>
    )

    }
      
      
    </div>
    
    
  </div>
)};
