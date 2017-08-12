import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import TaskForm from './TaskForm';
import Task from './Task';
import logo from '../images/logo.svg';
import {Tasks} from '../simpleTasks';

import '../css/App.css';

class App extends Component {
  constructor(){
    super();
    this.loadSamples = this.loadSamples.bind(this); 
    this.addTask = this.addTask.bind(this); 
    this.removeTask = this.removeTask.bind(this); 
    this.markComplete = this.markComplete.bind(this); 
    this.state = {
      tasks: {}
    };
  }

    addTask(task){
      const tasks = {...this.state.tasks};
      const taskKey = Object.keys(tasks).length + 1;
      tasks[`task${taskKey}`] = task;
      this.setState({ tasks })
    }

   removeTask(key){
     const tasks = {...this.state.tasks};
     delete tasks[key];
    this.setState({ tasks }) 
  }

  markComplete(key){
     const tasks = {...this.state.tasks};
     tasks[key].status = "Done"
     this.setState({ tasks }) 
  }
  loadSamples(){
      this.setState({
        tasks: Tasks
      })
  }

  //Callback which runs before rendering the APP component
  componentWillMount(){ 
    this.loadSamples();
  }

    
  render() {
    return (
      <div className="App">
         <Header/>
          <div className="content">
            <TaskForm addTask={this.addTask} tasks={this.state.tasks}/>
            <ul className="allTasks">
              { Object.
                keys(this.state.tasks).map(
                  key => <Task key={key} index={key} task={this.state.tasks[key]} removefromTask={this.removeTask} markasDone={this.markComplete}  />)
            }
            </ul>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
