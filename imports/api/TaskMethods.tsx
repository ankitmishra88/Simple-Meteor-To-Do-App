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
        TasksCollection.remove(task_id)
    },
    'tasks.update'(task_id,isChecked){
        check(task_id,String)
        check(isChecked,Boolean)
        TasksCollection.update(task_id,{
            $set:{isChecked:isChecked}
        })
    }
})
