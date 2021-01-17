import {check} from 'meteor/check'
import {TasksCollection} from '../db/TasksCollection'
import { Meteor } from 'meteor/meteor'


Meteor.methods({
    'tasks.insert'(text){
        check(text,String)
        
        TasksCollection.insert({
            text:text,
            userId:this.userId,
        })
    },

    'tasks.remove'(task_id){
        check(task_id,String)
        const task=TasksCollection.findOne({_id:task_id,userId:this.userId})
        if(!task){
            throw new Meteor.Error('Not Authorized to remove task of another user')
        }
        TasksCollection.remove(task_id)
    },
    'tasks.update'(task_id,isChecked){
        check(task_id,String)
        const task=TasksCollection.findOne({_id:task_id,userId:this.userId})
        if(!task){
            throw new Meteor.Error('Not Authorized to remove task of another user')
        }
        check(isChecked,Boolean)
        TasksCollection.update(task_id,{
            $set:{isChecked:isChecked}
        })
    }
})
