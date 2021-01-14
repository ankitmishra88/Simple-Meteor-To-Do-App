import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/TasksCollection';

interface Task{
  text:string,
  priority:number
}
const insertTask=(task:Task)=>TasksCollection.insert(task)

Meteor.startup(()=>{
  const TasksItems=[
    {text:'This is task 1 initialized',priority:0},
    {text:'This is  task 2 initialized',priority:1},
    {text:'This is  task 2 initialized',priority:2}
  ]
  if(TasksCollection.find().count()==0){
    TasksItems.map(task=>{insertTask(task)})
  }
  

})