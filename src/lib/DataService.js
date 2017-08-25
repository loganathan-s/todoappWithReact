import React, { Component } from 'react';
import {BACKEND, getNumberFromText, formatArrayOfHash} from '../helpers';
import Request from '../lib/ExternalRequest';
class DataService  {
   
   static addTask(task){
     return Request.post(`${BACKEND}/tasks`, { task })
     .then(response =>  response )
     .catch(err => err.message );
   }

  static getTasks() {
   return  Request.get(`${BACKEND}/tasks`)
     .then(response => {
       return formatArrayOfHash(response)
     })
     .catch(err => {
       return err.message
   });
  }
  
  static updateTask(task){
     return Request.put(`${BACKEND}/tasks/${task.id}`, { task })
     .then(response =>  response )
     .catch(err => err.message );
  }

  static removeTask(task){
     return Request.delete(`${BACKEND}/tasks/${task}`)
     .then(response =>  task )
     .catch(err => err.message );
  }
}

export default DataService;