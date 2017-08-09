import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import TaskForm from './TaskForm';
import logo from '../images/logo.svg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header/>
          <div className="content">
            <TaskForm/>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
