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
    this.state = {
      tasks: {}
    };
  }

    addTask(task){
      console.log(this.state)
     //always take the copy of state and then do update 
      const tasks = {...this.state.tasks};
      const timestamp = Date.now();
      tasks[`task-${timestamp}`] = task;
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
                  key => <Task key={key}  task={this.state.tasks[key]} />)
            }
            </ul>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
