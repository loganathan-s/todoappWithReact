import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import TaskForm from './TaskForm';
import Task from './Task';
import logo from '../images/logo.svg';
import {Tasks} from '../simpleTasks';
import {BACKEND, formatArrayOfHash} from '../helpers';
import Request from '../lib/ExternalRequest';


import '../css/App.css';

class App extends Component {
  constructor(){
    super();
    this.addTask = this.addTask.bind(this); 
    this.removeTask = this.removeTask.bind(this); 
    this.updateTask = this.updateTask.bind(this); 
    this.markComplete = this.markComplete.bind(this); 
    this.setCurrentTaskEditable = this.setCurrentTaskEditable.bind(this);
  }

  addTask(task){
    this.props.ayncTaskAdd(task);
  }

  removeTask(task){
     this.props.ayncTaskDelete(task);
  }

  updateTask(key, updatedTask){
     let task = this.props.tasks[key]
     task.task = updatedTask
     task.edit = false
     this.props.ayncTaskUpdate(task);
  }

  markComplete(key){
     let task = {...this.props.tasks[key]}
     task.status = (task.status === "Done" ? "InProgress" : "Done")
     this.props.ayncTaskUpdate(task);
  }

  setCurrentTaskEditable(key){
    this.props.setTaskEditable(key);
  }
  
  render() {
    return (
      <div className="App">
         <Header />
          <div className="content">
            <TaskForm addTask={this.addTask} /> 
            <ul className="allTasks">
              { Object.
                keys(this.props.tasks).map(
                  key => <Task key={key} index={key} task={this.props.tasks[key]} removefromTask={this.removeTask} markasDone={this.markComplete}  setCurrentTaskEditable={this.setCurrentTaskEditable} updateTask={this.updateTask}/>)
            }
            </ul>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
