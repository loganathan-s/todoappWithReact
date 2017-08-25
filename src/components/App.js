import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import TaskForm from './TaskForm';
import Task from './Task';
import logo from '../images/logo.svg';
import {Tasks} from '../simpleTasks';
import {BACKEND, formatArrayOfHash} from '../helpers';
import Request from '../lib/ExternalRequest';
import RequestError from './RequestError';
import Loading from './Loading';


import '../css/App.css';

class App extends Component {
  constructor(){
    super();
    this.updateTask = this.updateTask.bind(this); 
    this.markComplete = this.markComplete.bind(this); 
  }

  componentDidMount() {
     this.props.ayncTaskList()
  }

  updateTask(key, updatedTask){
     let task = {...this.props.tasks[key]}
     console.log(task);
     task.task = updatedTask;
     task.edit = false;
     this.props.ayncTaskUpdate(task);
  }

  markComplete(key){
     let task = {...this.props.tasks[key]}
     task.status = (task.status === "Done" ? "InProgress" : "Done");
     this.props.ayncTaskUpdate(task);
  }
  
  render() {
    const errorDetail = this.props.requests.isError ? <RequestError/>  : '';
    const loading = this.props.requests.isLoading ? <Loading/> : '';

    return (
      <div className="App">
         <Header />
          <div className="content">
             { loading }
        { errorDetail }
            <TaskForm addTask={this.props.ayncTaskAdd} /> 
            <ul className="allTasks">
              { Object.
                keys(this.props.tasks).map(
                  key => <Task key={key} index={key} task={this.props.tasks[key]} removefromTask={this.props.ayncTaskDelete} markasDone={this.markComplete}  setCurrentTaskEditable={this.props.setTaskEditable} updateTask={this.updateTask}/>)
            }
            </ul>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
