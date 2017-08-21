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
    this.loadSamples = this.loadSamples.bind(this); 
    this.addTask = this.addTask.bind(this); 
    this.removeTask = this.removeTask.bind(this); 
    this.updateTask = this.updateTask.bind(this); 
    this.markComplete = this.markComplete.bind(this); 
    this.setCurrentTaskEditable = this.setCurrentTaskEditable.bind(this); 
    this.state = {
      tasks: {},
      editing: false,
      currentTask: {}
    };
  }

  addTask(task){
    const tasks = {...this.state.tasks};
    Request.post(`${BACKEND}/tasks`, { task })
    .then(response => {
       tasks[`${response.id}`] = response;
       this.setState({ tasks })
     })
     .catch(err => {
       return err.message
      });
  }

  removeTask(key){
     const tasks = {...this.state.tasks};
     Request.delete(`${BACKEND}/tasks/${key}`)
     .then(response => {
       delete tasks[key];
       this.setState({ tasks }) 
     })
     .catch(err => {
       return err.message
      });
  }

  updateTask(key, updatedTask){
     const tasks = {...this.state.tasks};
     const task = tasks[key]
     task.task = updatedTask
     Request.put(`${BACKEND}/tasks/${task.id}`, { task })
     .then(response => { tasks[key] = response })
     .catch(err => {  return err.message });
     task.edit = false
     this.setState({ tasks }) 
  }

  markComplete(key){
     const tasks = {...this.state.tasks};
     let task = tasks[key]
     task.status = (task.status === "Done" ? "InProgress" : "Done")
     Request.put(`${BACKEND}/tasks/${task.id}`, { task })
     .then(response => { tasks[key] = response })
     .catch(err => {  return err.message });
     this.setState({ tasks }) 
  }

  setCurrentTaskEditable(key){
    const tasks = {...this.state.tasks};
    const currentTask = tasks[key]
    currentTask["edit"] = !currentTask["edit"];
    tasks[key] = currentTask;
    this.setState({ tasks });
  }

  loadSamples(){
     let self = this;
     const tasks = Request.get(`${BACKEND}/tasks`)
     .then(response => {
       self.setState({ tasks: formatArrayOfHash(response) })
     })
     .catch(err => {
       return err.message
      });
  }

  //Callback which runs before rendering the APP component
  componentWillMount(){ 
    this.loadSamples();
  }

    
  render() {
    return (
      <div className="App">
         <Header />
          <div className="content">
            <TaskForm addTask={this.addTask} /> 
            <ul className="allTasks">
              { Object.
                keys(this.state.tasks).map(
                  key => <Task key={key} index={key} task={this.state.tasks[key]} removefromTask={this.removeTask} markasDone={this.markComplete}  setCurrentTaskEditable={this.setCurrentTaskEditable} updateTask={this.updateTask}/>)
            }
            </ul>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
