import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/TasksCollection';
import {Accounts} from 'meteor/accounts-base'

interface Task{
  text:string,
  priority:number
}
const SEED_USERNAME='metroite'
const SEED_PASSWORD='password'
const insertTask=(task:Task,user)=>TasksCollection.insert({text:task.text,user:user._id})

Meteor.startup(()=>{
  /**/
  if(!Accounts.findUserByUsername(SEED_USERNAME)){
    Accounts.createUser({
      username:SEED_USERNAME,
      password:SEED_PASSWORD
    })
  }

  const user=Accounts.findUserByUsername(SEED_USERNAME)
  const TasksItems=[
    {text:'This is task 1 initialized',priority:0},
    {text:'This is  task 2 initialized',priority:1},
    {text:'This is  task 2 initialized',priority:2}
  ]
  if(TasksCollection.find().count()==0){
    TasksItems.map(task=>{insertTask(task,user)})
  }

})