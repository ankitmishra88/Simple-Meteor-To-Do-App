import React from 'react';
import {Tasks} from './Tasks'
import {TaskForm} from './TaskForm'

export const App = () => (
  <div className="app">
    <header>
    <div className="app-bar">
          <div className="app-header">
            <h1>📝️ Simple Meteor To do App!</h1>
          </div>
      </div>
    </header>
    <div className="main">
      <TaskForm/>
      <Tasks />
    </div>
    
    
  </div>
);
